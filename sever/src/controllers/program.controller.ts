import { handleCreateProgram, handleGetProgramById, handleGetPrograms, handleUpdateProgram } from "../repositories/program.repository.js";
import { ErrorCustom, RequestHandlerCustom } from "../utils/configs/custom.js";
import { parseRequestData } from "../utils/configs/helper.js";
import { uploadFiles } from "../utils/libs/cloudinary.js";

export const getPrograms = RequestHandlerCustom(
  async (req, res) => {
    const featured = req.query.featured as string | undefined;
    const featuredBool = featured === 'true' ? true : undefined;

    const programs = await handleGetPrograms({ featured: featuredBool });

    res.status(200).json({
      message: "Get programs successfully",
      data: {
        programs: programs
      }
    });
  }
);

export const getProgram = RequestHandlerCustom(
  async (req, res) => {
    const id = req.params.id;

    const program = await handleGetProgramById({ id });

    res.status(200).json({
      message: "Get program successfully",
      data: {
        program: program
      }
    });
  }
);

export interface ICreateProgramData {
  title: string;
  description: string;
  country: string;
  duration: string;
  tuition: string;
  imageUrl?: string; // Optional because it can be uploaded as a file
  image?: Express.Multer.File; // Field for file upload
  requirements: string[];
  benefits: string[];
  featured: boolean;
  status?: string;
}

export interface IUpdateProgramData {
  title?: string;
  description?: string;
  country?: string;
  duration?: string;
  tuition?: string;
  imageUrl?: string;
  image?: Express.Multer.File; // Field for file upload
  requirements?: string[];
  benefits?: string[];
  featured?: boolean;
  status?: string;
}

export const createProgram = RequestHandlerCustom(
  async (req, res) => {
    const data: ICreateProgramData = parseRequestData(req);

    // Xử lý tải lên hình ảnh nếu có
    if (req.files && Array.isArray(req.files) && req.files.length > 0) {
      // Tìm file có name là 'image'
      const imageFile = (req.files as Express.Multer.File[]).find(file => file.fieldname === 'image');

      if (imageFile) {
        try {
          // Tải lên Cloudinary
          const uploadResult = await uploadFiles(imageFile, 'programs');

          if (typeof uploadResult === 'object' && 'url' in uploadResult) {
            // Lưu URL ảnh từ Cloudinary
            data.imageUrl = uploadResult.url;
          }
        } catch (error) {
          console.error('Lỗi khi tải ảnh lên Cloudinary:', error);
          return res.status(500).json({
            message: "Lỗi khi tải ảnh lên",
            error
          });
        }
      }
    }

    const program = await handleCreateProgram(data);

    res.status(201).json({
      message: "New program created",
      data: {
        program: program
      }
    });
  }
);

export const updateProgram = RequestHandlerCustom(
  async (req, res, next) => {
    const id = req.params.id;

    if (!id) {
      return next(new ErrorCustom(400, "Program ID is required"));
    }

    const data: IUpdateProgramData = parseRequestData(req);

    // Kiểm tra xem có dữ liệu để cập nhật không
    if (Object.keys(data).length === 0) {
      return next(new ErrorCustom(400, "No data provided for update"));
    }

    // Xử lý tải lên hình ảnh mới nếu có
    if (req.files && Array.isArray(req.files) && req.files.length > 0) {
      // Tìm file có name là 'image'
      const imageFile = (req.files as Express.Multer.File[]).find(file => file.fieldname === 'image');

      if (imageFile) {
        try {
          // Tải lên Cloudinary
          const uploadResult = await uploadFiles(imageFile, 'programs');

          if (typeof uploadResult === 'object' && 'url' in uploadResult) {
            // Lưu URL ảnh mới từ Cloudinary
            data.imageUrl = uploadResult.url;
          }
        } catch (error) {
          console.error('Lỗi khi tải ảnh lên Cloudinary:', error);
          return res.status(500).json({
            message: "Lỗi khi tải ảnh lên",
            error
          });
        }
      }
    }

    const updatedProgram = await handleUpdateProgram({ id, ...data });

    res.status(200).json({
      message: "Program updated successfully",
      data: {
        program: updatedProgram
      }
    });
  }
);