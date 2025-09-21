import express from 'express';
import { PORT } from './utils/services/constants.js';
import connectDatabase from './utils/configs/database.js';
import blogRoute from './routes/blogRoute.js';
import contactRoute from './routes/contactRoute.js';
import faqRoute from './routes/faqRoute.js';
import programRoute from './routes/programRoute.js';
import jobRoute from './routes/jobRoute.js';
import { acceptFormdata } from './utils/configs/middlewares.js';

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  // console.log(`[User Service] ${req.method} ${req.path}`);
  // console.log('Headers:', req.headers);
  // console.log('Query:', req.query);
  // console.log('Body:', req.body);
  next();
});

app.use(acceptFormdata);

connectDatabase()
  .then(() => console.log('Database đã sẵn sàng'))
  .catch((err: Error) => console.error('Lỗi kết nối database:', err));

app.use("/api/v1/blogs", blogRoute);
app.use("/api/v1/contacts", contactRoute);
app.use("/api/v1/faqs", faqRoute);
app.use("/api/v1/programs", programRoute);
app.use("/api/v1/jobs", jobRoute);

app.listen(PORT, () => {
  console.log(`User Service đang chạy trên cổng ${PORT}`);
});
