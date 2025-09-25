import { ICreateProgramData } from "../controllers/program.controller.js";
import { Job } from "../models/job.model.js";
import { HandlerCustom } from "../utils/configs/custom.js";

export const handleGetPrograms = HandlerCustom(async (data: { featured?: boolean }) => {
    const filter: { featured?: boolean } = {};

    if (data.featured === true) {
        filter.featured = true;
    }

    const jobs = await Job
        .find(filter)
        .sort({ createdAt: -1 })
        .exec();

    return jobs;
});

export const handleGetProgramById = HandlerCustom(async (data: { id: string }) => {
    const jobs = await Job
        .findById({ _id: data.id })
        .exec();

    return jobs;
});

export const handleCreateProgram = HandlerCustom(async (data: ICreateProgramData) => {
    const job = await new Job({
        title: data.title,
        country: data.country,
        imageUrl: data.imageUrl,
        positions: data.positions,
        location: data.location,
        salary: data.salary,
        applicationDeadline: data.applicationDeadline,
        estimatedDeparture: data.estimatedDeparture,
        requirements: data.requirements,
        benefits: data.benefits,
        description: data.description,
        company: data.company,
        workType: data.workType,
        featured: data.featured,
        workingHours: data.workingHours,
        overtime: data.overtime,
        accommodation: data.accommodation,
        workEnvironment: data.workEnvironment,
        trainingPeriod: data.trainingPeriod,
    }).save();

    return job;
});