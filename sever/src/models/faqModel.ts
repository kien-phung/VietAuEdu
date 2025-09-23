import mongoose, { Schema } from "mongoose";

const schema: Schema<IFAQ> = new Schema(
  {
    question: String,
    answer: String,
    category: String,
    status: {
      type: String,
      enum: ["inactive", "active"],
      default: "active",
    },
  },
  {
    timestamps: true,
  }
);

export const FAQ = mongoose.models.FAQ || mongoose.model<IFAQ>("FAQ", schema);