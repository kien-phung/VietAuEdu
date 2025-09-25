import express from 'express';
import { PORT } from './utils/configs/constants.js';
import connectDatabase from './utils/libs/database.js';
import apiRoutes from './routes/routes.js';
import { applyMiddlewares } from './utils/configs/middlewares/middlewares.js';

const app = express();

// Áp dụng tất cả middleware
applyMiddlewares(app);

// Kết nối đến cơ sở dữ liệu
connectDatabase()
  .then(() => console.log('Các database đã sẵn sàng'))
  .catch((err: Error) => console.error('Lỗi kết nối database:', err));

// Đăng ký tất cả các route với tiền tố /api/v1
app.use("/api/v1", apiRoutes);

app.listen(PORT, () => {
  console.log(`User Service đang chạy trên cổng ${PORT}`);
});
