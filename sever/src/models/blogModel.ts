import mongoose, { Schema } from "mongoose";

const schema: Schema<IBlog> = new Schema(
  {
    title: String,
    excerpt: String,
    content: String,
    author: String,
    publishedAt: String,
    imageUrl: String,
    category: String,
    slug: String,
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

export const Blog = mongoose.models.Blog || mongoose.model<IBlog>("Blog", schema);