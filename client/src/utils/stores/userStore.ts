import { EHttpType, handleRequest, IApiResponse } from "../../lib/axiosInstance";
import { IBaseStore, createStore } from "../../lib/initialStore";

interface IUserDataResponse {
	user?: IUser;
	users?: IUser[];
}

export interface IUserStore extends IBaseStore {
	usersTable: IUser[];

	getAllUsers: () => Promise<IApiResponse<IUserDataResponse>>;
    getUser: (
    	userId: string
    ) => Promise<IApiResponse<IUserDataResponse>>;
}

const storeName = "user";
const initialState = {
	usersTable: [],
};

export const useUserStore = createStore<IUserStore>(
	storeName,
	initialState,
	(set, get) => ({
		getAllUsers: async (): Promise<IApiResponse<IUserDataResponse>> => {
			return await get().handleRequest(async () => {
				return await handleRequest(EHttpType.GET, `/users`);
			});
		},

		getUser: async (userId: string): Promise<IApiResponse<IUserDataResponse>> => {
			return await get().handleRequest(async () => {
				return await handleRequest(EHttpType.GET, `/users/${userId}`);
			});
		},

		reset: () => {
			set({ ...initialState });
		},
	})
);