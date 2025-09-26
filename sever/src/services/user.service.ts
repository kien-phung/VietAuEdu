import { handleCreateUser, handleGetUserByEmail } from "../repositories/user.repository.js";
import { ROOT_EMAIL, ROOT_PASSWORD, SALT_ROUNDS } from "../utils/configs/constants.js";
import { HandlerCustom } from "../utils/configs/custom.js";
import bcrypt from "bcrypt";

export const createRootUser = HandlerCustom(async () => {
    console.log("Kiểm tra và khởi tạo root user...");
    
    const existingUser = await handleGetUserByEmail({ email: ROOT_EMAIL });
    
    if (existingUser) {
        console.log("Root user đã được tạo, dừng tiến trình...");
        return;
    }

    // Nếu chưa tồn tại, tạo mới với quyền admin
    console.log("Root user chưa tồn tại, đang tạo mới...");

    const hashPassword = await bcrypt.hash(ROOT_PASSWORD, SALT_ROUNDS);

    await handleCreateUser({ email: ROOT_EMAIL, password: hashPassword });
    
    console.log("Đã tạo root user thành công!");
});