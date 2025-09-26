import { handleCreateFAQ, handleGetFAQById, handleGetFAQs, handleUpdateFAQ } from "../repositories/faq.repository.js";
import { ErrorCustom, RequestHandlerCustom } from "../utils/configs/custom.js";
import { parseRequestData } from "../utils/configs/helper.js";

export const getFAQs = RequestHandlerCustom(
  async (req, res) => {
    const category = req.query.category as string | undefined;

    const faqs = await handleGetFAQs({ category });

    res.status(200).json({
      message: "Get faqs successfully",
      faqs: faqs
    });
  }
);

export interface ICreateFAQData {
  question: string,
  answer: string,
  category: string,
  publishedAt: string,
}

export interface IUpdateFAQData {
  question?: string,
  answer?: string,
  category?: string,
  publishedAt?: string,
}

export const createFAQ = RequestHandlerCustom(
  async (req, res) => {
    const data: ICreateFAQData = parseRequestData(req);

    const faq = await handleCreateFAQ(data);

    res.status(201).json({
      message: "New FAQ created",
      faq: faq
    });
  }
);

export const updateFAQ = RequestHandlerCustom(
  async (req, res, next) => {
    const id = req.params._id;

    if (!id) {
      return next(new ErrorCustom(400, "FAQ ID is required"));
    }

    const data: IUpdateFAQData = parseRequestData(req);

    // Kiểm tra xem có dữ liệu để cập nhật không
    if (Object.keys(data).length === 0) {
      return next(new ErrorCustom(400, "No data provided for update"));
    }

    const updatedFAQ = await handleUpdateFAQ({ id, ...data });

    res.status(200).json({
      message: "FAQ updated successfully",
      faq: updatedFAQ
    });
  }
);

export const getFAQById = RequestHandlerCustom(
  async (req, res, next) => {
    const id = req.params._id;

    if (!id) {
      return next(new ErrorCustom(400, "FAQ ID is required"));
    }

    const faq = await handleGetFAQById({ id });

    res.status(200).json({
      message: "FAQ retrieved successfully",
      faq
    });
  }
);