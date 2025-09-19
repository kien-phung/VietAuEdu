import { EHttpType, handleRequest, IApiResponse } from "@/lib/axiosInstance";
import { IBaseStore, createStore } from "../../lib/initialStore";
import { ETheme } from "../types/enum";

interface IContactDataResponse {
}

export interface ISystemStore extends IBaseStore {
	user: IUser | null;
	theme: ETheme;
	programs: IProgram[];
	blogs: IBlog[];
	faqs: IFAQ[];

	submitContact: (
		data: any
	) => Promise<IApiResponse<IContactDataResponse>>;

	handleSetUser: (user: IUser | null) => void;
	handleSetTheme: (theme: ETheme) => void;
	handleSetPrograms: (programs: IProgram[]) => void;
	handleSetBlogs: (posts: IBlog[]) => void;
	handleSetFAQs: (faqs: IFAQ[]) => void;
	handleSetLoading: (loading: boolean) => void;
	handleSetError: (error: string | null) => void;
}

const storeName = "system";
const initialState = {
	user: null,
	theme: ETheme.LIGHT,
	programs: [],
	blogs: [],
	faqs: [],
	isLoading: false,
	error: null,
};

export const useSystemStore = createStore<ISystemStore>(
	storeName,
	initialState,
	(set, get) => ({
		submitContact: async (data: any): Promise<IApiResponse<IContactDataResponse>> => {
			return await get().handleRequest(async () => {
				return await handleRequest(EHttpType.POST, '/contact', data);
			});
		},

		handleSetUser: (user: IUser | null) => {
			set({ user });
		},

		handleSetTheme: (theme: ETheme) => {
			set({ theme });
		},

		handleSetPrograms: (programs: IProgram[]) => {
			set({ programs });
		},

		handleSetBlogs: (posts: IBlog[]) => {
			set({ blogs: posts });
		},

		handleSetFAQs: (faqs: IFAQ[]) => {
			set({ faqs });
		},

		handleSetLoading: (loading: boolean) => {
			set({ isLoading: loading });
		},

		handleSetError: (error: string | null) => {
			set({ error });
		},
	})
);
