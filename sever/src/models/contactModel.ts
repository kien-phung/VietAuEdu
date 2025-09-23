import mongoose, { Schema } from "mongoose";

const schema: Schema<IContact> = new Schema(
  {
    name: String,
    email: String,
    phone: String,
    message: String,
    program: {
      type: Schema.Types.ObjectId,
      ref: "Program",
    },
    status: {
      type: String,
      enum: ["pending", "resolved"],
      default: "pending",
    },
    resolvedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    resolvedAt: {
      type: Date,
    }
  },
  {
    timestamps: true,
  }
);

export const Contact = mongoose.models.Contact || mongoose.model<IContact>("Contact", schema);