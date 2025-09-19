import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT!;
export const DATABASE_URL = process.env.DATABASE_URL!;
export const RABBITMQ_URL = process.env.RABBITMQ_URL!;
export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY!;

// RabbitMQ queue names
export const AUTH_QUEUE = 'auth_queue';
export const USER_QUEUE = 'user_queue';

export const TOTAL_MS_IN_DAY = 24 * 60 * 60 * 1000;