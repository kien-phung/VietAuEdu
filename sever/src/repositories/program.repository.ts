import { ICreateProgramData, IUpdateProgramData } from "../controllers/program.controller.js";
import { Job } from "../models/job.model.js";
import { ErrorCustom, HandlerCustom } from "../utils/configs/custom.js";

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

export const handleUpdateProgram = HandlerCustom(async (data: { id: string } & Partial<IUpdateProgramData>) => {
    const program = await Job.findById(data.id);

    if (!program) {
        throw new ErrorCustom(404, "Program not found");
    }

    // Cập nhật các trường được cung cấp
    if (data.title !== undefined) program.title = data.title;
    if (data.country !== undefined) program.country = data.country;
    if (data.imageUrl !== undefined) program.imageUrl = data.imageUrl;
    if (data.positions !== undefined) program.positions = data.positions;
    if (data.location !== undefined) program.location = data.location;
    if (data.salary !== undefined) program.salary = data.salary;
    if (data.applicationDeadline !== undefined) program.applicationDeadline = data.applicationDeadline;
    if (data.estimatedDeparture !== undefined) program.estimatedDeparture = data.estimatedDeparture;
    if (data.requirements !== undefined) program.requirements = data.requirements;
    if (data.benefits !== undefined) program.benefits = data.benefits;
    if (data.description !== undefined) program.description = data.description;
    if (data.company !== undefined) program.company = data.company;
    if (data.workType !== undefined) program.workType = data.workType;
    if (data.featured !== undefined) program.featured = data.featured;
    if (data.workingHours !== undefined) program.workingHours = data.workingHours;
    if (data.overtime !== undefined) program.overtime = data.overtime;
    if (data.accommodation !== undefined) program.accommodation = data.accommodation;
    if (data.workEnvironment !== undefined) program.workEnvironment = data.workEnvironment;
    if (data.trainingPeriod !== undefined) program.trainingPeriod = data.trainingPeriod;

    const updatedProgram = await program.save();
    return updatedProgram;
});