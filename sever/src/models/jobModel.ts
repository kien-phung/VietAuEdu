import mongoose, { Schema } from "mongoose";

const schema: Schema<IJob> = new Schema(
  {
    title: String,
        country: String,
        imageUrl: String,
        positions: Number,
        location: String,
        salary: String,
        applicationDeadline: String,
        estimatedDeparture: String,
        requirements: [String],
        benefits: [String],
        description: String,
        company: String,
        workType: String,
        featured: Boolean,
        workingHours: String,
        overtime: String,
        accommodation: String,
        workEnvironment: String,
        trainingPeriod: String,
  },
  {
    timestamps: true,
  }
);

export const Job = mongoose.model<IJob>("Job", schema);