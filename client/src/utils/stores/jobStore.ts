import { EHttpType, handleRequest, IApiResponse } from "../../lib/axiosInstance";
import { IBaseStore, createStore } from "../../lib/initialStore";

interface IJobDataResponse {
	job?: IJob;
	jobs?: IJob[];
}

export interface IJobStore extends IBaseStore {

	getAllJobs: () => Promise<IApiResponse<IJobDataResponse>>;
	getJob: (
		jobId: string
	) => Promise<IApiResponse<IJobDataResponse>>;
}

const storeName = "job";
const initialState = {};

export const useJobStore = createStore<IJobStore>(
	storeName,
	initialState,
	(set, get) => ({
		getAllJobs: async (): Promise<IApiResponse<IJobDataResponse>> => {
			return await get().handleRequest(async () => {
				return await handleRequest(EHttpType.GET, `/jobs`);
			});
		},

		getJob: async (jobId: string): Promise<IApiResponse<IJobDataResponse>> => {
			return await get().handleRequest(async () => {
				return await handleRequest(EHttpType.GET, `/jobs/${jobId}`);
			});
		},

		reset: () => {
			set({ ...initialState });
		},
	})
);