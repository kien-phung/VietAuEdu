import { handleCreateProgram, handleGetProgramById, handleGetPrograms } from "../repositories/program.repository.js";
import { RequestHandlerCustom } from "../utils/configs/custom.js";
import { parseRequestData } from "../utils/configs/helper.js";

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

export const createProgram = RequestHandlerCustom(
  async (req, res) => {
    const data: ICreateProgramData = parseRequestData(req);

    const program = await handleCreateProgram(data);

    res.status(201).json({
      message: "New program created",
      data: {
        program: program
      }
    });
  }
);