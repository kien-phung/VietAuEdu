import { EHttpType, handleRequest, IApiResponse } from "../../lib/axiosInstance";
import { IBaseStore, createStore } from "../../lib/initialStore";

interface IContactDataResponse {
	contact?: IContact;
	contacts?: IContact[];
}

export interface IContactStore extends IBaseStore {
	getAllContacts: () => Promise<IApiResponse<IContactDataResponse>>;
	getContact: (
		contactId: string
	) => Promise<IApiResponse<IContactDataResponse>>;
	submitContact: (
		name: string,
		email: string,
		phone: string,
		program: string,
		message: string,
	) => Promise<IApiResponse<IContactDataResponse>>;
}

const storeName = "contact";
const initialState = {};

export const useContactStore = createStore<IContactStore>(
	storeName,
	initialState,
	(set, get) => ({
		getAllContacts: async (): Promise<IApiResponse<IContactDataResponse>> => {
			return await get().handleRequest(async () => {
				return await handleRequest(EHttpType.GET, `/contacts`);
			});
		},

		getContact: async (contactId: string): Promise<IApiResponse<IContactDataResponse>> => {
			return await get().handleRequest(async () => {
				return await handleRequest(EHttpType.GET, `/contacts/${contactId}`);
			});
		},

		submitContact: async (
			name: string,
			email: string,
			phone: string,
			program: string,
			message: string,
		): Promise<IApiResponse<IContactDataResponse>> => {
			const formData = new FormData();
			formData.append("name", name);
			formData.append("email", email);
			formData.append("phone", phone);
			formData.append("program", program);
			formData.append("message", message);

			return await get().handleRequest(async () => {
				return await handleRequest(EHttpType.POST, `/contacts/`, formData);
			});
		},

		reset: () => {
			set({ ...initialState });
		},
	})
);