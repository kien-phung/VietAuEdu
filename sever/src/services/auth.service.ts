import { HandlerCustom } from "../utils/configs/custom.js";
import { redisClient } from "../utils/libs/database.js";

export const HandlerCreateOTP = (length = 6): string => {
    const max = Math.pow(10, length);
    return Math.floor(Math.random() * max).toString().padStart(length, '0');
}

export const handleCreateAndStoreOTP = HandlerCustom(async (email: string) => {
    const rateLimitKey = `otp:ratelimit:${email}`;
    const existing = await redisClient.get(rateLimitKey);
    if (existing) {
        return { error: 'Too many requests', status: 429 };
    }

    const otp = HandlerCreateOTP();
    const otpKey = `otp:${email}`;

    await redisClient.set(otpKey, otp, { EX: 60 * 5 });
    await redisClient.set(rateLimitKey, '1', { EX: 60 });

    return { otp };
});