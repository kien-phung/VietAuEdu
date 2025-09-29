import { handleCreateFAQ, handleGetFAQById, handleGetFAQs, handleUpdateFAQ } from "../repositories/faq.repository.js";
import { ErrorCustom, RequestHandlerCustom } from "../utils/configs/custom.js";
import { parseRequestData } from "../utils/configs/helper.js";

export const getFAQs = RequestHandlerCustom(
  async (req, res) => {
    const category = req.query.category as string | undefined;

    const faqs = await handleGetFAQs({ category });

    res.status(200).json({
      success: true,
      message: "Get faqs successfully",
      FAQs: faqs
    });
  }
);

export interface ICreateFAQData {
  question: string,
  answer: string,
  category: string,
  status: string,
}

export interface IUpdateFAQData {
  question?: string,
  answer?: string,
  category?: string,
  status?: string,
}

export const createFAQ = RequestHandlerCustom(
  async (req, res) => {
    const data: ICreateFAQData = parseRequestData(req);

    const faq = await handleCreateFAQ(data);

    res.status(201).json({
      success: true,
      message: "New FAQ created",
      FAQ: faq
    });
  }
);

export const updateFAQ = RequestHandlerCustom(
  async (req, res, next) => {
    const id = req.params.id;

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
      success: true,
      message: "FAQ updated successfully",
      FAQ: updatedFAQ
    });
  }
);

export const getFAQById = RequestHandlerCustom(
  async (req, res, next) => {
    const id = req.params.id;

    if (!id) {
      return next(new ErrorCustom(400, "FAQ ID is required"));
    }

    const faq = await handleGetFAQById({ id });

    res.status(200).json({
      success: true,
      message: "FAQ retrieved successfully",
      FAQ: faq
    });
  }
);