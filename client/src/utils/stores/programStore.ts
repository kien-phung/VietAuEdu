import { EHttpType, handleRequest, IApiResponse } from "../../lib/axiosInstance";
import { IBaseStore, createStore } from "../../lib/initialStore";

interface IProgramDataResponse {
	program?: IProgram;
	programs?: IProgram[];
}

export interface IProgramStore extends IBaseStore {
	getAllPrograms: () => Promise<IApiResponse<IProgramDataResponse>>;
	getProgram: (
		programId: string
	) => Promise<IApiResponse<IProgramDataResponse>>;
	getFeaturedPrograms: () => Promise<IApiResponse<IProgramDataResponse>>;
}

const storeName = "program";
const initialState = {};

export const useProgramStore = createStore<IProgramStore>(
	storeName,
	initialState,
	(set, get) => ({
		getAllPrograms: async (): Promise<IApiResponse<IProgramDataResponse>> => {
			return await get().handleRequest(async () => {
				return await handleRequest(EHttpType.GET, `/programs`);
			});
		},

		getProgram: async (programId: string): Promise<IApiResponse<IProgramDataResponse>> => {
			return await get().handleRequest(async () => {
				return await handleRequest(EHttpType.GET, `/programs/${programId}`);
			});
		},

		getFeaturedPrograms: async (): Promise<IApiResponse<IProgramDataResponse>> => {
			return await get().handleRequest(async () => {
				return await handleRequest(EHttpType.GET, '/programs?featured=true');
			});
		},

		reset: () => {
			set({ ...initialState });
		},
	})
);