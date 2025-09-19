import express from 'express';
import { PORT } from './utils/services/constants.js';
import { connectWithRetry } from './utils/configs/database.js';
import userRoute from './routes/userRoute.js';
import { initializeRabbitMQ } from './utils/services/rabbitmq.js';
import multer from 'multer';

const app = express();

const uploadStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({
  storage: uploadStorage,
});

app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  // console.log(`[User Service] ${req.method} ${req.path}`);
  // console.log('Headers:', req.headers);
  // console.log('Query:', req.query);
  // console.log('Body:', req.body);
  next();
});

app.use((req, res, next) => {
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
});

connectWithRetry()
  .then(() => console.log('Database đã sẵn sàng'))
  .catch((err: Error) => console.error('Lỗi kết nối database:', err));

initializeRabbitMQ()
  .then(() => console.log('RabbitMQ đã sẵn sàng cho User Service'))
  .catch((err: Error) => {
    console.error('Lỗi kết nối RabbitMQ:', err);
    console.log('Tiếp tục chạy service mà không có RabbitMQ');
  });

app.use("/api", userRoute);

app.listen(PORT, () => {
  console.log(`User Service đang chạy trên cổng ${PORT}`);
});
