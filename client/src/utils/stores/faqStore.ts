import { EHttpType, handleRequest, IApiResponse } from "../../lib/axiosInstance";
import { IBaseStore, createStore } from "../../lib/initialStore";

interface IFAQDataResponse {
}

export interface IFAQStore extends IBaseStore {

	getAllFAQs: () => Promise<IApiResponse<IFAQDataResponse>>;
	getFAQsByCategory: (
		category: string
	) => Promise<IApiResponse<IFAQDataResponse>>;
}

const storeName = "faq";
const initialState = {};

export const useFAQStore = createStore<IFAQStore>(
	storeName,
	initialState,
	(set, get) => ({
		getAllFAQs: async (): Promise<IApiResponse<IFAQDataResponse>> => {
			return await get().handleRequest(async () => {
				return await handleRequest(EHttpType.GET, `/faqs`);
			});
		},

		getFAQsByCategory: async (category: string): Promise<IApiResponse<IFAQDataResponse>> => {
			return await get().handleRequest(async () => {
				return await handleRequest(EHttpType.GET, `/faq?category=${category}`);
			});
		},

		reset: () => {
			set({ ...initialState });
		},
	})
);