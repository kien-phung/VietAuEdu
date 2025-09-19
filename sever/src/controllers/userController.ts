import TryCatch from "../utils/services/customTryCatch.js";
import { prisma } from "../utils/configs/database.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { JWT_SECRET_KEY } from "../utils/services/constants.js";
import { parseRequestData } from "../utils/services/helper.js";

export const rootRoute = TryCatch(async (req, res) => {
  res.send("User service is working");
});

export const getAllUsers = TryCatch(async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

export const getUserById = async (userId: string) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};

export const getProfile = TryCatch(async (req, res) => {
  const userId = req.params.userId;
  const user = await getUserById(userId as string);
  res.json(user);
});

export const createUser = TryCatch(async (req, res) => {
  const data = parseRequestData(req);
  const { name, email, password } = data;

  const existingUser = await prisma.user.findUnique({
    where: { email }
  });

  if (existingUser) {
    return res.status(400).json({
      success: false,
      message: "User already exists"
    });
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const userData: any = {
    name,
    email,
    password: hashPassword
  };

  if (req.files && Array.isArray(req.files) && req.files.length > 0) {
    const avatarFile = req.files.find(file => file.fieldname === 'avatar');
    if (avatarFile) {
      userData.avatar = avatarFile.path;
    }
  }

  const user = await prisma.user.create({
    data: userData
  });

  res.status(201).json({
    success: true,
    message: "User created successfully",
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      avatar: user.avatar
    }
  });
});

export const updateUser = TryCatch(async (req, res) => {
  const userId = req.params.userId;
  const data = parseRequestData(req);

  const existingUser = await prisma.user.findUnique({
    where: { id: userId }
  });

  if (!existingUser) {
    return res.status(404).json({
      success: false,
      message: "User not found"
    });
  }

  const updateData: any = {};

  if (data.name) updateData.name = data.name;
  if (data.email) updateData.email = data.email;
  if (data.password) updateData.password = await bcrypt.hash(data.password, 10);

  if (req.files && Array.isArray(req.files) && req.files.length > 0) {
    const avatarFile = req.files.find(file => file.fieldname === 'avatar');
    if (avatarFile) {
      updateData.avatar = avatarFile.path;
    }
  }

  const updatedUser = await prisma.user.update({
    where: { id: userId },
    data: updateData
  });

  res.json({
    success: true,
    message: "User updated successfully",
    user: {
      name: updatedUser.name,
      email: updatedUser.email,
      avatar: updatedUser.avatar
    }
  });
});

export const deleteUser = TryCatch(async (req, res) => {
  const userId = req.params.userId;

  const existingUser = await prisma.user.findUnique({
    where: { id: userId }
  });

  if (!existingUser) {
    return res.status(404).json({
      success: false,
      message: "User not found"
    });
  }

  await prisma.user.delete({
    where: { id: userId }
  });

  res.json({
    success: true,
    message: "User deleted successfully"
  });
});

export const registerUser = async (data: { name: string; email: string; password: string }) => {
  try {
    const { name, email, password } = data;

    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      return {
        success: false,
        status: 400,
        message: "User already exists"
      };
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashPassword
      }
    });

    return {
      success: true,
      status: 201,
      message: "User registered successfully",
      user: {
        id: user.id,
        name: user.name,
        email: user.email
      }
    };
  } catch (error) {
    console.error('Error in registerUser:', error);
    return {
      success: false,
      status: 500,
      message: "Internal server error"
    };
  }
};

export const loginUser = async (data: { email: string; password: string }) => {
  try {
    const { email, password } = data;

    const user = await prisma.user.findUnique({
      where: { email }
    });

    if (!user) {
      return {
        success: false,
        status: 404,
        message: "User not found"
      };
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return {
        success: false,
        status: 400,
        message: "Invalid password"
      };
    }

    const token = jwt.sign({
      id: user.id,
      role: user?.role
    }, JWT_SECRET_KEY, {
      expiresIn: "7d"
    });

    return {
      success: true,
      status: 200,
      message: "Logged in successfully",
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    };
  } catch (error) {
    console.error('Error in loginUser:', error);
    return {
      success: false,
      status: 500,
      message: "Internal server error"
    };
  }
};

export const createAdminUser = TryCatch(async (req: IAuthenticatedRequest, res) => {
  const data = parseRequestData(req);
  const { name, email, password } = data;

  if (!name || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "Vui lòng cung cấp đầy đủ thông tin"
    });
  }

  const existingUser = await prisma.user.findUnique({
    where: { email }
  });

  if (existingUser) {
    return res.status(400).json({
      success: false,
      message: "User already exists"
    });
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const userData: any = {
    name,
    email,
    password: hashPassword,
    role: 'ADMIN'
  };

  if (req.files && Array.isArray(req.files) && req.files.length > 0) {
    const avatarFile = req.files.find(file => file.fieldname === 'avatar');
    if (avatarFile) {
      userData.avatar = avatarFile.path;
    }
  }

  const user = await prisma.user.create({
    data: userData
  });

  res.status(201).json({
    success: true,
    message: "Admin user created successfully",
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      avatar: user.avatar
    }
  });
});