import express from "express";

import { login, logout, sendOTP, verifyOTP } from "../controllers/auth.controller.js";
import { isAuth } from "../utils/configs/middlewares/auth.middleware.js";

const authRoute = express.Router();
authRoute.post("/login", login);
authRoute.post("/logout", isAuth, logout);
authRoute.post("/verify-otp", verifyOTP);
authRoute.post("/send-otp", sendOTP);

export default authRoute;