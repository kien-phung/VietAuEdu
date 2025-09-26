import { EStatus } from "./src/utils/types/enum";

declare global {
    interface IJob {
        id: string;
        title: string;
        country: string;
        imageUrl?: string;
        positions: number;
        location: string;
        salary: string;
        applicationDeadline: string;
        estimatedDeparture: string;
        requirements: string[];
        benefits: string[];
        description: string;
        company: string;
        workType: string;
        featured: boolean;
        workingHours: string;
        overtime: string;
        accommodation: string;
        workEnvironment: string;
        trainingPeriod: string;
        status: EStatus;
        createdAt?: string;
        updatedAt?: string;
    }
}