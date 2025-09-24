import { EContactStatus, EStatus, EUserStatus } from "./enum.js";

declare global {
    interface IUser {
        id: string;
        email: string;
        password: string;
        name: string;
        phone: string;
        role: string;
        status: EUserStatus;
    }

    interface IProgram {
        id: string;
        title: string;
        description: string;
        country: string;
        duration: string;
        tuition: string;
        requirements: string[];
        benefits: string[];
        imageUrl: string;
        featured: boolean;
        createdAt?: Date;
        updatedAt?: Date;
        status: EStatus;
    }

    interface IBlog {
        id: string;
        title: string;
        excerpt: string;
        content: string;
        author: string;
        publishedAt: string;
        imageUrl: string;
        category: string;
        slug: string;
        status: EStatus;
    }

    interface IJob {
        id: string;
        title: string;
        country: string;
        imageUrl: string;
        positions: number;
        location: string;
        salary: string;
        applicationDeadline: string;
        estimatedDeparture: string;
        requirements?: string[];
        benefits?: string[];
        description?: string;
        company?: string;
        workType?: string;
        featured?: boolean;
        workingHours?: string;
        overtime?: string;
        accommodation?: string;
        workEnvironment?: string;
        trainingPeriod?: string;
        status?: EStatus;
    }

    interface IContact {
        id: string;
        name: string;
        email: string;
        phone: string;
        program?: IProgram;
        message: string;
        resolvedBy?: string;
        resolvedAt?: string;
        createdAt?: string;
        updatedAt?: string;
        status?: EContactStatus;
    }

    interface IFAQ {
        id: string;
        question: string;
        answer: string;
        category: string;
        status: EStatus;
    }
}
export { };
