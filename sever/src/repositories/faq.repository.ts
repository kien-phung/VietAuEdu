import { ICreateFAQData } from "../controllers/faq.controller.js";
import { FAQ } from "../models/faq.model.js";
import { HandlerCustom } from "../utils/configs/custom.js";

export const handleGetFAQs = HandlerCustom(async (data: { category?: string }) => {
    const filter: { category?: string } = {};

    if (data.category) {
        filter.category = data.category;
    }

    const faqs = await FAQ.find(filter).exec();

    return faqs;
});

export const handleCreateFAQ = HandlerCustom(async (data: ICreateFAQData) => {
    const faq = await new FAQ(
        {
            question: data.question,
            answer: data.answer,
            category: data.category,
            publishedAt: data.publishedAt
        }
    ).save();

    return faq;
});