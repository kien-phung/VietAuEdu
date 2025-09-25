import { User } from "../models/user.model.js";
import { HandlerCustom } from "../utils/configs/custom.js";
import { EUserStatus } from "../utils/types/enum.js";

export const handleGetAllUsers = HandlerCustom(async () => {
    const users = await User
        .find()
        .sort({ createdAt: -1 })
        .exec();

    return users;
});

export const handleGetUserById = HandlerCustom(async (data: { id: string }) => {
    const user = await User
        .findById({ _id: data.id })
        .exec();

    return user;
});

export const handleGetUserByEmail = HandlerCustom(async (data: { email: string }) => {
    const user = await User
        .findOne({ email: data.email })
        .exec();

    return user;
});

export const handleUpdateUserStatusByEmail = HandlerCustom(async (data: { email: string, status: EUserStatus }) => {
    const user = await User
        .updateOne({ email: data.email }, { status: data.status })
        .exec();

    return user;
});

// export const handleCreateProgram = HandlerCustom(async (data: ICreateProgramData) => {
//     const job = await new User({
//         title: data.title,
//         country: data.country,
//         imageUrl: data.imageUrl,
//         positions: data.positions,
//         location: data.location,
//         salary: data.salary,
//         applicationDeadline: data.applicationDeadline,
//         estimatedDeparture: data.estimatedDeparture,
//         requirements: data.requirements,
//         benefits: data.benefits,
//         description: data.description,
//         company: data.company,
//         workType: data.workType,
//         featured: data.featured,
//         workingHours: data.workingHours,
//         overtime: data.overtime,
//         accommodation: data.accommodation,
//         workEnvironment: data.workEnvironment,
//         trainingPeriod: data.trainingPeriod,
//     }).save();

//     return job;
// });