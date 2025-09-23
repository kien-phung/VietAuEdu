import mongoose, { Schema } from "mongoose";

const schema: Schema<IProgram> = new Schema(
  {
    title: String,
    description: String,
    country: String,
    duration: String,
    tuition: String,
    requirements: [String],
    benefits: [String],
    imageUrl: String,
    featured: Boolean,
    status: {
      type: String,
      enum: ["inactive", "active"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

export const Program = mongoose.models.Program || mongoose.model<IProgram>("Program", schema);