import { ICreateFAQData } from "../controllers/faqController.js";
import { FAQ } from "../models/faqModel.js";
import { HandlerCustom } from "../utils/services/custom.js";

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