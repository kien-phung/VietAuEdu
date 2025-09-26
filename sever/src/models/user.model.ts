import mongoose, { Schema, Document } from "mongoose";
import { EUserStatus } from "../utils/types/enum.js";

interface IUserDocument extends Document {
    email?: string;
    password?: string;
    name?: string;
    phone?: string;
    status?: EUserStatus;
    role?: string; // Thêm trường role
}

const schema: Schema<IUserDocument> = new Schema(
    {
        email: String,
        password: String,
        name: String,
        phone: String,
        role: {
            type: String,
            enum: ["user", "admin"],
            default: "user",
        },
        status: {
            type: String,
            enum: Object.values(EUserStatus),
            default: EUserStatus.PENDING,
        },
    },
    {
        timestamps: true,
    }
);

export const User = mongoose.models.User || mongoose.model<IUserDocument>("User", schema);