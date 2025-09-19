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
        image: string;
        featured: boolean;
    }

    interface IBlog {
        id: string;
        title: string;
        excerpt: string;
        content: string;
        author: string;
        publishedAt: string;
        image: string;
        category: string;
        slug: string;
    }

    interface IContactForm {
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
