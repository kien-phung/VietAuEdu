import mongoose, { Schema } from "mongoose";

const schema: Schema<IUser> = new Schema(
    {
        email: String,
        password: String,
        name: String,
        phone: String,
        role: {
            type: String,
            enum: ["contact_admin", "faq_admin", "job_admin", "program_admin", "root_admin"],
            default: "contact_admin",
        },
        status: {
            type: String,
            enum: ["pending", "inactive", "active"],
            default: "pending",
        },
    },
    {
        timestamps: true,
    }
);

export const User = mongoose.models.User || mongoose.model<IUser>("User", schema);