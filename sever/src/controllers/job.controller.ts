import { handleCreateJob, handleGetAllJobs, handleGetJobById, handleUpdateJob } from "../repositories/job.repository.js";
import { ErrorCustom, RequestHandlerCustom } from "../utils/configs/custom.js";
import { parseRequestData } from "../utils/configs/helper.js";
import { uploadFiles } from "../utils/libs/cloudinary.js";
import fs from 'fs';

export const getAllJobs = RequestHandlerCustom(
  async (req, res) => {
    const jobs = await handleGetAllJobs();

    res.status(200).json({
      message: "Get jobs successfully",
      data: {
        jobs: jobs
      }
    });
  }
);

export const getJob = RequestHandlerCustom(
  async (req, res) => {
    const id = req.params._id;

    const job = await handleGetJobById({ id });

    res.status(200).json({
      message: "Get job successfully",
      data: {
        job: job
      }
    });
  }
);

export interface ICreateJobData {
  title: string;
  country: string;
  imageUrl?: string;  // Đã thay đổi thành optional
  image?: Express.Multer.File;  // Thêm field image cho file upload
  positions: number;
  location: string;
  salary: string;
  applicationDeadline: string;
  estimatedDeparture: string;
  requirements: string[];
  benefits: string[];
  description: string;
  company: string;
  workType: string;
  featured: boolean;
  workingHours: string;
  overtime: string;
  accommodation: string;
  workEnvironment: string;
  trainingPeriod: string;
}

export interface IUpdateJobData {
  title?: string;
  country?: string;
  imageUrl?: string;
  image?: Express.Multer.File;  // Thêm field image cho file upload
  positions?: number;
  location?: string;
  salary?: string;
  applicationDeadline?: string;
  estimatedDeparture?: string;
  requirements?: string[];
  benefits?: string[];
  description?: string;
  company?: string;
  workType?: string;
  featured?: boolean;
  workingHours?: string;
  overtime?: string;
  accommodation?: string;
  workEnvironment?: string;
  trainingPeriod?: string;
}

export const createJob = RequestHandlerCustom(
  async (req, res) => {
    try {
      // Log request information for debugging
      console.log('Request Headers:', req.headers);
      console.log('Request Files:', req.files);
      console.log('Request Body:', req.body);

      const data: ICreateJobData = parseRequestData(req);
      console.log('Parsed Data:', data);

      // Xử lý tải lên hình ảnh nếu có
      if (req.files && Array.isArray(req.files) && req.files.length > 0) {
        // Tìm file có name là 'image'
        const imageFile = (req.files as Express.Multer.File[]).find(file => file.fieldname === 'image');
        console.log('Image File:', imageFile);

        if (imageFile) {
          try {
            // Tải lên Cloudinary trực tiếp từ buffer
            const uploadResult = await uploadFiles(imageFile, 'jobs');
            console.log('Upload Result:', uploadResult);

            if (typeof uploadResult === 'object' && 'url' in uploadResult) {
              // Lưu URL ảnh từ Cloudinary
              data.imageUrl = uploadResult.url;
            }
          } catch (error) {
            console.error('Lỗi khi tải ảnh lên Cloudinary:', error);
            return res.status(500).json({
              message: "Lỗi khi tải ảnh lên",
              error: error instanceof Error ? error.message : String(error)
            });
          }
        }
      }

      const job = await handleCreateJob(data);

      res.status(201).json({
        message: "New job created",
        job: job
      });
    } catch (error) {
      console.error('Error in createJob:', error);
      return res.status(500).json({
        message: "Lỗi khi tạo job",
        error: error instanceof Error ? error.message : String(error)
      });
    }
  }
);

export const updateJob = RequestHandlerCustom(
  async (req, res, next) => {
    try {
      const id = req.params._id;

      if (!id) {
        return next(new ErrorCustom(400, "Job ID is required"));
      }

      // Log request information for debugging
      console.log('Update Job - Request Headers:', req.headers);
      console.log('Update Job - Request Files:', req.files);
      console.log('Update Job - Request Body:', req.body);

      const data: IUpdateJobData = parseRequestData(req);
      console.log('Update Job - Parsed Data:', data);

      // Kiểm tra xem có dữ liệu để cập nhật không
      if (Object.keys(data).length === 0) {
        return next(new ErrorCustom(400, "No data provided for update"));
      }

      // Xử lý tải lên hình ảnh mới nếu có
      if (req.files && Array.isArray(req.files) && req.files.length > 0) {
        // Tìm file có name là 'image'
        const imageFile = (req.files as Express.Multer.File[]).find(file => file.fieldname === 'image');
        console.log('Update Job - Image File:', imageFile);

        if (imageFile) {
          try {
            // Tải lên Cloudinary trực tiếp từ buffer
            const uploadResult = await uploadFiles(imageFile, 'jobs');
            console.log('Update Job - Upload Result:', uploadResult);

            if (typeof uploadResult === 'object' && 'url' in uploadResult) {
              // Lưu URL ảnh mới từ Cloudinary
              data.imageUrl = uploadResult.url;
            }
          } catch (error) {
            console.error('Lỗi khi tải ảnh lên Cloudinary:', error);
            return res.status(500).json({
              message: "Lỗi khi tải ảnh lên",
              error: error instanceof Error ? error.message : String(error)
            });
          }
        }
      }

      const updatedJob = await handleUpdateJob({ id, ...data });

      res.status(200).json({
        message: "Job updated successfully",
        job: updatedJob
      });
    } catch (error) {
      console.error('Error in updateJob:', error);
      return res.status(500).json({
        message: "Lỗi khi cập nhật job",
        error: error instanceof Error ? error.message : String(error)
      });
    }
  }
);