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
        createdAt?: Date;
        updatedAt?: Date;
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
        program?: string;
        message: string;
        subject?: string;
        status?: "pending" | "resolved";
        resolvedBy?: string;
        resolvedAt?: Date;
        createdAt?: Date;
        updatedAt?: Date;
    }

    interface IFAQ {
        id: string;
        question: string;
        answer: string;
        category: string;
        publishedAt: string;
    }
}
export { };
