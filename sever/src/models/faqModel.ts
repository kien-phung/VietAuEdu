import mongoose, { Schema } from "mongoose";

const schema: Schema<IFAQ> = new Schema(
  {
    question: String,
    answer: String,
    category: String,
    publishedAt: String,
  },
  {
    timestamps: true,
  }
);

export const FAQ = mongoose.model<IFAQ>("FAQ", schema);