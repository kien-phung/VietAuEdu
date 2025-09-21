import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT!;
export const NODE_ENV = process.env.NODE_ENV!;
export const CLIENT_URL = process.env.CLIENT_URL!;

export const DATABASE_MONGO_URL = process.env.DATABASE_MONGO_URL!;

export const CLOUDINARY_URL = process.env.CLOUDINARY_URL!;

export const EMAIL_USER = process.env.EMAIL_USER!;
export const EMAIL_PASS = process.env.EMAIL_PASS!;