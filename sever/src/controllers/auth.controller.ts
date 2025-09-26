import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { NODE_ENV, PRIVATE_KEY, TOTAL_MS_IN_DAY } from "../utils/configs/constants.js";
import { ErrorCustom, RequestHandlerCustom } from "../utils/configs/custom.js";
import { redisClient } from "../utils/libs/database.js";
import { handleGetUserByEmail, handleUpdateUserStatusByEmail } from "../repositories/user.repository.js";
import { EUserStatus } from "../utils/types/enum.js";
import { parseRequestData } from "../utils/configs/helper.js";
import { handleCreateAndStoreOTP } from "../services/auth.service.js";
import { EmailTemplate, sendMail } from "../utils/libs/mailer.js";

export const verifyOTP = RequestHandlerCustom(async (req, res, next) => {
    const data = parseRequestData(req);
    const { email, otp } = data;

    const otpKey = `otp:${email}`;
    const storedOTP = await redisClient.get(otpKey);

    if (storedOTP !== otp) {
        return next(new ErrorCustom(400, "Invalid OTP"));
    }

    const user = await handleGetUserByEmail({ email });

    if (!user) {
        return next(new ErrorCustom(404, "User not found"));
    }

    await handleUpdateUserStatusByEmail({ email, status: EUserStatus.ACTIVE });

    await redisClient.del(otpKey);

    res.status(200).json({
        success: true,
        message: "OTP verified"
    });
});

export const sendOTP = RequestHandlerCustom(async (req, res, next) => {
    const data = parseRequestData(req);
    const { email, name = '' } = data;

    // Tạo OTP và lưu trong Redis
    const otpResult = await handleCreateAndStoreOTP(email);
    if ("error" in otpResult) {
        const errorStatus = (otpResult as { status?: number }).status || 500;
        return next(new ErrorCustom(errorStatus, String(otpResult?.error) || "Internal server error"));
    }

    // Lấy thông tin user nếu đã đăng ký
    const user = await handleGetUserByEmail({ email });
    const userName = user?.name || name || email.split('@')[0];

    // Lấy năm hiện tại
    const currentYear = new Date().getFullYear();

    // Chuẩn bị dữ liệu cho template email
    const templateData = {
        logoUrl: "https://example.com/logo.png", // Thay thế bằng URL thực của logo
        title: "Xác thực tài khoản của bạn",
        greeting: "Xin chào",
        name: userName,
        message: "Cảm ơn bạn đã đăng ký tài khoản với VietAu Academy. Vui lòng sử dụng mã OTP dưới đây để xác thực tài khoản của bạn.",
        otp: otpResult.otp,
        expiry: "5", // OTP hết hạn sau 5 phút (được cài đặt trong handleCreateAndStoreOTP)
        contactEmail: "vietauedu@gmail.com",
        year: currentYear.toString(),
        address: "123 Đường ABC, Quận XYZ, TP. Hồ Chí Minh, Việt Nam",
    };

    // Gửi email
    await sendMail(
        email,
        "Mã xác thực OTP từ VietAu Academy",
        EmailTemplate.SEND_OTP,
        templateData
    );

    res.status(200).json({
        success: true,
        message: "OTP sent successfully"
    });
});

export const login = RequestHandlerCustom(async (req, res, next) => {
    const data = parseRequestData(req);
    const { email, password } = data;

    if (!email || !password) {
        return next(new ErrorCustom(400, "Please input full information"));
    }

    const user = await handleGetUserByEmail({ email });

    if (!user) {
        return next(new ErrorCustom(404, "User not found"));
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return next(new ErrorCustom(400, "Invalid password"));
    }

    const isActive = await user.status === EUserStatus.ACTIVE;
    if (!isActive) {
        return next(new ErrorCustom(400, "User is not active"));
    }

    const loginKey = `login:${email}`;
    const storedLogin = await redisClient.get(loginKey);
    if (storedLogin) {
        return next(new ErrorCustom(400, "User already logged in"));
    }

    const token = jwt.sign(
        {
            id: user.id,
            role: user?.role,
        },
        PRIVATE_KEY,
        {
            expiresIn: "7d",
            algorithm: "HS256",
        }
    );

    res.cookie("token", token as string, {
        httpOnly: true,
        secure: NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 7 * TOTAL_MS_IN_DAY
    });

    res.status(200).json({
        success: true,
        message: "Login successful",
        data: {
            user: user,
            isActive,
        }
    });
});

export const logout = RequestHandlerCustom(async (req, res, next) => {
    const { email } = req.params;

    const user = await handleGetUserByEmail({ email });

    if (!user) {
        return next(new ErrorCustom(404, "User not found"));
    }

    const loginKey = `login:${email}`;
    const storedLogin = await redisClient.get(loginKey);
    if (!storedLogin) {
        return next(new ErrorCustom(400, "User not logged in"));
    }

    await redisClient.del(loginKey);

    res.clearCookie("token", {
        httpOnly: true,
        secure: NODE_ENV === "production",
        sameSite: "strict",
    });

    res.status(200).json({
        success: true,
        message: "Logout successful"
    });
});