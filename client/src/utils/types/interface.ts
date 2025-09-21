import { ETheme } from "./enum";

declare global {
    interface IUser {
        name: string;
        email: string;
        phone?: string;
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
        createdAt: string;
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
    }

    interface IContact {
        id: string;
        name: string;
        email: string;
        phone: string;
        program: string;
        message: string;
    }

    interface IFAQ {
        id: string;
        question: string;
        answer: string;
        category: string;
        publishedAt: string;
    }

    interface IAppState {
        user: IUser | null;
        theme: ETheme;
        programs: IProgram[];
        blogs: IBlog[];
        faqs: IFAQ[];
        isLoading: boolean;
        error: string | null;
    }
}
export { };
