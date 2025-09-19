import { EHttpType, handleRequest, IApiResponse } from "../../lib/axiosInstance";
import { IBaseStore, createStore } from "../../lib/initialStore";

interface IBlogDataResponse {
	blog?: IBlog;
	blogs?: IBlog[];
}

export interface IBlogStore extends IBaseStore {
	getAllBlogs: () => Promise<IApiResponse<IBlogDataResponse>>;
	getBlogsBySlug: (
		slug: string
	) => Promise<IApiResponse<IBlogDataResponse>>;
	getBlogsRecent: (
		limit : number
	) => Promise<IApiResponse<IBlogDataResponse>>;
    getBlog: (
    	blogId: string
    ) => Promise<IApiResponse<IBlogDataResponse>>;
}

const storeName = "blog";
const initialState = {};

export const useBlogStore = createStore<IBlogStore>(
	storeName,
	initialState,
	(set, get) => ({
		getAllBlogs: async (): Promise<IApiResponse<IBlogDataResponse>> => {
			return await get().handleRequest(async () => {
				return await handleRequest(EHttpType.GET, '/blogs');
			});
		},
		
		getBlogsBySlug: async (slug: string): Promise<IApiResponse<IBlogDataResponse>> => {
			return await get().handleRequest(async () => {
				return await handleRequest(EHttpType.GET, `/blogs/${slug}`);
			});
		},
		
		getBlogsRecent: async (limit: number = 6): Promise<IApiResponse<IBlogDataResponse>> => {
			return await get().handleRequest(async () => {
				return await handleRequest(EHttpType.GET, `/blogs?limit=${limit}`);
			});
		},

		getBlog: async (blogId: string): Promise<IApiResponse<IBlogDataResponse>> => {
			return await get().handleRequest(async () => {
				return await handleRequest(EHttpType.GET, `/blogs/${blogId}`);
			});
		},

		reset: () => {
			set({ ...initialState });
		},
	})
);