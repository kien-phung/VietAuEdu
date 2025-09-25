import express from 'express';
import blogRoute from './blog.route.js';
import contactRoute from './contact.route.js';
import faqRoute from './faq.route.js';
import programRoute from './program.route.js';
import jobRoute from './job.route.js';
import authRoute from './auth.route.js';

const router = express.Router();

/**
 * Gom các routes của ứng dụng
 */
const routes = [
    { path: '/blogs', router: blogRoute },
    { path: '/contacts', router: contactRoute },
    { path: '/faqs', router: faqRoute },
    { path: '/programs', router: programRoute },
    { path: '/jobs', router: jobRoute },
    { path: '/auth', router: authRoute },
];

/**
 * Đăng ký các routes với tiền tố /api/v1
 */
routes.forEach(route => {
    router.use(route.path, route.router);
});

export default router;