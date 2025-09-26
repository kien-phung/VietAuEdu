import { EHttpType, handleRequest, IApiResponse } from "@/lib/axiosInstance";
import { createStore, EStorageType, IBaseStore } from "@/lib/initialStore";
import { useUserStore } from './userStore';
import { useBlogStore } from "./blogStore";
import { useContactStore } from "./contactStore";
import { useFAQStore } from "./faqStore";
import { useJobStore } from "./jobStore";
import { useProgramStore } from "./programStore";
import { useSystemStore } from "./systemStore";

interface IAuthDataResponse {
	user: IUser;
	isActive: boolean;
}

export interface IAuthStore extends IBaseStore {
	userAuth: IUser | null;

	login: (email: string, password: string) => Promise<IApiResponse<IAuthDataResponse>>;
	// loginGoogle: (formData: FormData) => Promise<IApiResponse>;
	RefreshToken: () => Promise<IApiResponse>;
	sendOTP: (email: string) => Promise<IApiResponse>;
	verifyOTP: (email: string, otp: string) => Promise<IApiResponse>;
	resetPassword: (email: string) => Promise<IApiResponse>;
	forgotPassword: (email: string, password: string, confirmPassword: string) => Promise<IApiResponse>;
	changePassword: (email: string, oldPassword: string, password: string, confirmPassword: string) => Promise<IApiResponse>;

	handleSetUserAuth: (user: IUser) => void;
}

const storeName = "auth";
const initialState = {
	userAuth: null,
};

export const useAuthStore = createStore<IAuthStore>(
	storeName,
	initialState,
	(set, get) => ({
		RefreshToken: async (): Promise<IApiResponse> => {
			return await get().handleRequest(async () => {
				return await handleRequest(EHttpType.POST, "/auth/refresh-token");
			});
		},

		login: async (email: string, password: string): Promise<IApiResponse<IAuthDataResponse>> => {
			const formData = new FormData();
			formData.append("email", email);
			formData.append("password", password);

			return await get().handleRequest(async () => {
				const response = await handleRequest<IAuthDataResponse>(EHttpType.POST, "/auth/login", formData);

				if (response && response.data) {
					set({
						userAuth: response?.data?.user,
					});
				}

				return response;
			});
		},

		// loginGoogle: async (formData: FormData): Promise<IApiResponse> => {
		// 	return await get().handleRequest(async () => {
		// 		const response = await handleRequest(EHttpType.POST, "/auth/google-login", formData);

		// 		if (response && response.data && response.data.user) {
		// 			set({
		// 				userAuth: response.data.user,
		// 			});
		// 		}

		// 		return response;
		// 	});
		// },

		sendOTP: async (email: string): Promise<IApiResponse> => {
			const formData = new FormData();
			formData.append("email", email);

			return await get().handleRequest(async () => {
				return await handleRequest(EHttpType.POST, "/auth/send-otp", formData);
			});
		},

		verifyOTP: async (email: string, otp: string): Promise<IApiResponse> => {
			const formData = new FormData();
			formData.append("email", email);
			formData.append("otp", otp);

			return await get().handleRequest(async () => {
				return await handleRequest(EHttpType.POST, "/auth/verify-otp", formData);

			});
		},

		resetPassword: async (email: string): Promise<IApiResponse> => {
			const formData = new FormData();
			formData.append("email", email);

			return await get().handleRequest(async () => {
				return await handleRequest(EHttpType.POST, "/auth/reset-password", formData);

			});
		},

		forgotPassword: async (email: string, password: string, confirmPassword: string): Promise<IApiResponse> => {
			const formData = new FormData();
			formData.append("email", email);
			formData.append("password", password);
			formData.append("confirmPassword", confirmPassword);

			return await get().handleRequest(async () => {
				return await handleRequest(EHttpType.PATCH, "/auth/forgot-password", formData);
			});
		},

		changePassword: async (email: string, oldPassword: string, password: string, confirmPassword: string): Promise<IApiResponse> => {
			const formData = new FormData();
			formData.append("email", email);
			formData.append("oldPassword", oldPassword);
			formData.append("password", password);
			formData.append("confirmPassword", confirmPassword);

			return await get().handleRequest(async () => {
				return await handleRequest(EHttpType.PATCH, "/auth/change-password", formData);
			});
		},

		handleSetUserAuth: (user: IUser): void => {
			set({ userAuth: user });
		},

		reset: () => {
			set({ ...initialState });
			useSystemStore.getState().reset();
			useBlogStore.getState().reset();
			useContactStore.getState().reset();
			useFAQStore.getState().reset();
			useJobStore.getState().reset();
			useProgramStore.getState().reset();
			useUserStore.getState().reset();
		},
	}),
	{ storageType: EStorageType.COOKIE }
);