import { handleCreateJob, handleGetAllJobs, handleGetJobById, handleUpdateJob } from "../repositories/job.repository.js";
import { ErrorCustom, RequestHandlerCustom } from "../utils/configs/custom.js";
import { parseRequestData } from "../utils/configs/helper.js";

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
    const id = req.params.id;

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
  imageUrl: string;
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
    const data: ICreateJobData = parseRequestData(req);

    const job = await handleCreateJob(data);

    res.status(201).json({
      message: "New job created",
      data: {
        job: job
      }
    });
  }
);

export const updateJob = RequestHandlerCustom(
  async (req, res, next) => {
    const id = req.params.id;

    if (!id) {
      return next(new ErrorCustom(400, "Job ID is required"));
    }

    const data: IUpdateJobData = parseRequestData(req);

    // Kiểm tra xem có dữ liệu để cập nhật không
    if (Object.keys(data).length === 0) {
      return next(new ErrorCustom(400, "No data provided for update"));
    }

    const updatedJob = await handleUpdateJob({ id, ...data });

    res.status(200).json({
      message: "Job updated successfully",
      data: {
        job: updatedJob
      }
    });
  }
);