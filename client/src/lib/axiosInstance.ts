import axios, { InternalAxiosRequestConfig, AxiosResponse } from "axios";
import { SERVER_URL } from "../utils/services/constants";
// import { toast } from "react-toastify";

export const MAX_RETRIES = 3;

const getCookie = (name: string): string | null => {
  const matches = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  return matches ? matches[2] : null;
};

const axiosInstance = axios.create({
  baseURL: `${SERVER_URL}/api/v1`,
  withCredentials: true,
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 10000, // Add a timeout to prevent hanging requests
});

const getAccessToken = (item: string): string | null => {
  return getCookie(item) || localStorage.getItem(item) || sessionStorage.getItem(item);
};

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = getAccessToken("access_token");
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    (config as { retryCount?: number }).retryCount = (config as { retryCount?: number }).retryCount || 0;

    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },

  async (error) => {
    interface RetryConfig extends InternalAxiosRequestConfig {
      retryCount?: number;
    }
    const config = error.config as RetryConfig;

    // Add detailed logging
    console.error('Axios Error Details:', {
      url: config?.url,
      baseURL: config?.baseURL,
      method: config?.method,
      headers: config?.headers,
      status: error.response?.status,
      statusText: error.response?.statusText,
      errorMessage: error.message,
      errorName: error.name,
      errorCode: error.code
    });

    if ((config.retryCount ?? 0) < MAX_RETRIES) {
      config.retryCount = (config.retryCount ?? 0) + 1;
      console.log(`Retrying request (${config.retryCount}/${MAX_RETRIES}): ${config.method} ${config.url}`);
      return axiosInstance(config);
    }

    return error?.response?.data?.message
      ? Promise.reject(error)
      : Promise.reject(error);
  }
);

export interface IApiResponse<IData = unknown> {
  data?: IData | null;
  error?: string;
  message?: string;
  status?: number;
}

export enum EHttpType {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

export const handleRequest = async (
  type: EHttpType,
  route: string,
  formData?: FormData,
  toastMessage?: boolean
) => {
  let response;

  try {
    const headers = formData instanceof FormData
      ? { 'Content-Type': 'multipart/form-data' }
      : { 'Content-Type': 'application/json' };

    switch (type) {
      case EHttpType.GET:
        response = await axiosInstance.get(route);
        break;

      case EHttpType.POST:
        response = await axiosInstance.post(route, formData, { headers });
        break;

      case EHttpType.PUT:
        if (!formData) {
          throw new Error("FormData is required for PUT requests");
        }
        response = await axiosInstance.put(route, formData, { headers });
        break;

      case EHttpType.PATCH:
        if (!formData) {
          throw new Error("FormData is required for PATCH requests");
        }
        response = await axiosInstance.patch(route, formData, { headers });
        break;

      case EHttpType.DELETE:
        response = await axiosInstance.delete(route);
        break;

      default:
        throw new Error("Invalid request type");
    }

    // if (toastMessage) {
    //   toast.success(toastMessage);
    // }

    return { status: response.status, data: response.data };
  } catch (error) {
    console.error("Error fetching data:", error);

    // if (toastMessage) {
    //   toast.error(toastMessage);
    // }

    return {
      status: response?.status,
      data: response?.data,
      message: toastMessage || response?.data?.message || "An error occurred",
    };
  }
};

export const isSuccess = (status?: number) => status && status >= 200 && status < 300;

export default axiosInstance;