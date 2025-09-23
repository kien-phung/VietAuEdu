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
	createProgram: (
		title: string,
		description: string,
		country: string,
		duration: string,
		tuition: string,
		requirements: string[],
		benefits: string[],
		featured: boolean,
		status: "active" | "inactive"
	) => Promise<IApiResponse<IProgramDataResponse>>;
	updateProgram: (
		programId: string,
		title: string,
		description: string,
		country: string,
		duration: string,
		tuition: string,
		requirements: string[],
		benefits: string[],
		featured: boolean,
		status: "active" | "inactive"
	) => Promise<IApiResponse<IProgramDataResponse>>;
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

		createProgram: async (
			title: string,
			description: string,
			country: string,
			duration: string,
			tuition: string,
			requirements: string[],
			benefits: string[],
			featured: boolean,
			status: "active" | "inactive"
		): Promise<IApiResponse<IProgramDataResponse>> => {
			return await get().handleRequest(async () => {
				const formData = new FormData();
				formData.append("title", title);
				formData.append("description", description);
				formData.append("country", country);
				formData.append("duration", duration);
				formData.append("tuition", tuition);
				formData.append("requirements", JSON.stringify(requirements));
				formData.append("benefits", JSON.stringify(benefits));
				formData.append("featured", featured.toString());
				formData.append("status", status);

				return await handleRequest(EHttpType.POST, `/programs`, formData);
			});
		},

		updateProgram: async (
			programId: string,
			title: string,
			description: string,
			country: string,
			duration: string,
			tuition: string,
			requirements: string[],
			benefits: string[],
			featured: boolean,
			status: "active" | "inactive"
		): Promise<IApiResponse<IProgramDataResponse>> => {
			return await get().handleRequest(async () => {
				const formData = new FormData();
				formData.append("title", title);
				formData.append("description", description);
				formData.append("country", country);
				formData.append("duration", duration);
				formData.append("tuition", tuition);
				formData.append("requirements", JSON.stringify(requirements));
				formData.append("benefits", JSON.stringify(benefits));
				formData.append("featured", featured.toString());
				formData.append("status", status);

				return await handleRequest(EHttpType.PUT, `/programs/${programId}`, formData);
			});
		},

		reset: () => {
			set({ ...initialState });
		},
	})
);