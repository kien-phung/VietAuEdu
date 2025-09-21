import { NextFunction, Request, Response } from "express";
import cors from 'cors';
import { CLIENT_URL } from "../services/constants.js";
import { upload } from "../services/helper.js";
import { ErrorCustom } from "../services/custom.js";

export const acceptFormdata = (req: Request, res: Response, next: NextFunction) => {
    if (['POST', 'PUT', 'PATCH'].includes(req.method)) {
        upload.any()(req, res, function (err) {
            if (err) {
                console.error('Lỗi xử lý formdata:', err);
                return res.status(500).json({ success: false, message: 'Lỗi xử lý formdata' });
            }
            next();
        });
    } else {
        next();
    }
}

const ALLOWED_ORIGIN: string[] = [
    CLIENT_URL,
]

export const checkCORS = cors({
    origin: function (origin, callback) {
        if (!origin || ALLOWED_ORIGIN.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("This address is not allowed by CORS"));
        }
    },
    credentials: true,
});

export const errorResponse = (err: ErrorCustom, req: Request, res: Response, next: NextFunction) => {
    const status = err.status || 500;
    const message = err.message || "Internal Server Error";

    console.log(">>> Error Response: ", err);

    return res.status(status).json({
        success: false,
        status,
        message,
    });
}