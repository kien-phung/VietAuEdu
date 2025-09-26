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

export const handleCreateUser = HandlerCustom(async (data: {
    email: string;
    password: string;
}) => {
    const job = await new User({
        email: data.email,
        password: data.password,
    }).save();

    return job;
});

export const handleUpdateUserPasswordByEmail = HandlerCustom(async (data: { email: string, password: string }) => {
    const user = await User
        .updateOne({ email: data.email }, { password: data.password })
        .exec();

    return user;
});