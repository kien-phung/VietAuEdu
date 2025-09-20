import { EHttpType, handleRequest, IApiResponse } from "@/lib/axiosInstance";
import { IBaseStore, createStore } from "../../lib/initialStore";
import { ETheme } from "../types/enum";

interface IContactDataResponse {
	message?: string;
	status?: string;
}

export interface ISystemStore extends IBaseStore {
	user: IUser | null;
	theme: ETheme;
	programs: IProgram[];
	blogs: IBlog[];
	faqs: IFAQ[];

	submitContact: (
		data: Record<string, string | number | boolean>
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
		submitContact: async (data: Record<string, string | number | boolean>): Promise<IApiResponse<IContactDataResponse>> => {
			return await get().handleRequest(async () => {
				// Convert object to FormData for API compatibility
				const formData = new FormData();
				Object.entries(data).forEach(([key, value]) => {
					formData.append(key, String(value));
				});
				return await handleRequest(EHttpType.POST, '/contact', formData);
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
