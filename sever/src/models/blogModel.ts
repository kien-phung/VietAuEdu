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
  },
  {
    timestamps: true,
  }
);

export const Blog = mongoose.model<IBlog>("Contact", schema);