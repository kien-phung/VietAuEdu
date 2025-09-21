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
  },
  {
    timestamps: true,
  }
);

export const Program = mongoose.model<IProgram>("Program", schema);