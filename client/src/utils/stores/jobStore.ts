import { EHttpType, handleRequest, IApiResponse } from "../../lib/axiosInstance";
import { IBaseStore, createStore } from "../../lib/initialStore";
import { EStatus } from "../types/enum";

interface IJobDataResponse {
	job?: IJob;
	jobs?: IJob[];
}

export interface IJobStore extends IBaseStore {
	getAllJobs: () => Promise<IApiResponse<IJobDataResponse>>;
	getJob: (
		jobId: string
	) => Promise<IApiResponse<IJobDataResponse>>;
	createJob: (
		question: string,
		title: string,
		country: string,
		image: File,
		positions: number,
		location: string,
		salary: string,
		applicationDeadline: string,
		estimatedDeparture: string,
		requirements: string[],
		benefits: string[],
		description: string,
		company: string,
		workType: string,
		featured: boolean,
		workingHours: string,
		overtime: string,
		accommodation: string,
		workEnvironment: string,
		trainingPeriod: string,
		status: EStatus,
	) => Promise<IApiResponse<IJobDataResponse>>;
	updateJob: (
		jobId: string,
		question: string,
		title: string,
		country: string,
		image: File,
		positions: number,
		location: string,
		salary: string,
		applicationDeadline: string,
		estimatedDeparture: string,
		requirements: string[],
		benefits: string[],
		description: string,
		company: string,
		workType: string,
		featured: boolean,
		workingHours: string,
		overtime: string,
		accommodation: string,
		workEnvironment: string,
		trainingPeriod: string,
		status: EStatus,
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

		createJob: async (
			question: string,
			title: string,
			country: string,
			image: File | null,
			positions: number,
			location: string,
			salary: string,
			applicationDeadline: string,
			estimatedDeparture: string,
			requirements: string[],
			benefits: string[],
			description: string,
			company: string,
			workType: string,
			featured: boolean,
			workingHours: string,
			overtime: string,
			accommodation: string,
			workEnvironment: string,
			trainingPeriod: string,
			status: EStatus,
		): Promise<IApiResponse<IJobDataResponse>> => {
			const formData = new FormData();
			formData.append("question", question)
			formData.append("title", title)
			formData.append("country", country)
			if (image) formData.append("image", image)
			formData.append("positions", positions.toString())
			formData.append("location", location)
			formData.append("salary", salary)
			formData.append("applicationDeadline", applicationDeadline)
			formData.append("estimatedDeparture", estimatedDeparture)
			formData.append("requirements", JSON.stringify(requirements))
			formData.append("benefits", JSON.stringify(benefits))
			formData.append("description", description)
			formData.append("company", company)
			formData.append("workType", workType)
			formData.append("featured", featured.toString())
			formData.append("workingHours", workingHours)
			formData.append("overtime", overtime)
			formData.append("accommodation", accommodation)
			formData.append("workEnvironment", workEnvironment)
			formData.append("trainingPeriod", trainingPeriod)
			formData.append("status", status)

			return await get().handleRequest(async () => {
				return await handleRequest(EHttpType.POST, `/jobs`, formData);
			});
		},

		updateJob: async (
			jobId: string,
			title: string,
			country: string,
			image: File,
			positions: number,
			location: string,
			salary: string,
			applicationDeadline: string,
			estimatedDeparture: string,
			requirements: string[],
			benefits: string[],
			description: string,
			company: string,
			workType: string,
			featured: boolean,
			workingHours: string,
			overtime: string,
			accommodation: string,
			workEnvironment: string,
			trainingPeriod: string,
			status: EStatus,
		): Promise<IApiResponse<IJobDataResponse>> => {
			const formData = new FormData();
			formData.append("jobId", jobId)
			formData.append("title", title)
			formData.append("country", country)
			formData.append("image", image)
			formData.append("positions", positions.toString())
			formData.append("location", location)
			formData.append("salary", salary)
			formData.append("applicationDeadline", applicationDeadline)
			formData.append("estimatedDeparture", estimatedDeparture)
			formData.append("requirements", JSON.stringify(requirements) as string)
			formData.append("benefits", JSON.stringify(benefits) as string)
			formData.append("description", description)
			formData.append("company", company)
			formData.append("workType", workType)
			formData.append("featured", featured.toString())
			formData.append("workingHours", workingHours)
			formData.append("overtime", overtime)
			formData.append("accommodation", accommodation)
			formData.append("workEnvironment", workEnvironment)
			formData.append("trainingPeriod", trainingPeriod)
			formData.append("status", status)

			return await get().handleRequest(async () => {
				return await handleRequest(EHttpType.POST, `/jobs`, formData);
			});
		},

		reset: () => {
			set({ ...initialState });
		},
	})
);