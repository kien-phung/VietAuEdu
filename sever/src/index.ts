import express from 'express';
import { PORT } from './utils/configs/constants.js';
import connectDatabase from './utils/libs/database.js';
import apiRoutes from './routes/routes.js';
import { applyMiddlewares } from './utils/configs/middlewares/middlewares.js';
import { createRootUser } from './services/user.service.js';
import { HandlerCustom } from './utils/configs/custom.js';

const app = express();

// Áp dụng tất cả middleware
applyMiddlewares(app);

// Kết nối đến cơ sở dữ liệu và khởi tạo root user
connectDatabase()
  .then(HandlerCustom(async () => {
    await createRootUser();
  }));

// Đăng ký tất cả các route với tiền tố /api/v1
app.use("/api/v1", apiRoutes);

// Add error handling middleware AFTER routes
import { errorResponse } from './utils/configs/middlewares/logging.middleware.js';
app.use(errorResponse);

app.listen(PORT, () => {
  console.log(`User Service đang chạy trên cổng ${PORT}`);
});
