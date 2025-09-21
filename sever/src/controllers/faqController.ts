import { handleCreateFAQ, handleGetFAQs } from "../repositories/faqRepository.js";
import { RequestHandlerCustom } from "../utils/services/custom.js";
import { parseRequestData } from "../utils/services/helper.js";

export const getFAQs = RequestHandlerCustom(
  async (req, res) => {
    const category = req.query.category as string | undefined;

    const faqs = await handleGetFAQs({ category });

    res.status(200).json({
      message: "Get faqs successfully",
      data: {
        faqs: faqs
      }
    });
  }
);

export interface ICreateFAQData {
  question: string,
  answer: string,
  category: string,
  publishedAt: string,
}

export const createFAQ = RequestHandlerCustom(
  async (req, res) => {
    const data: ICreateFAQData = parseRequestData(req);

    const contact = await handleCreateFAQ(data);

    res.status(201).json({
      message: "New contact created",
      data: {
        contact: contact
      }
    });
  }
);