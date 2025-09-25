import { v2 as cloudinary } from "cloudinary";
import { ErrorCustom, HandlerCustom } from "../configs/custom.js";

export const uploadFiles = HandlerCustom(async (
  files: Express.Multer.File | Express.Multer.File[],
  folder?: string
) => {
  const fileArray = Array.isArray(files) ? files : [files];

  if (fileArray.length === 0) {
    throw new ErrorCustom(400, "No files to upload");
  }

  const uploadPromises = fileArray.map((file) => {
    const { path: filePath, mimetype } = file;

    if (!mimetype.startsWith("image/") && !mimetype.startsWith("video/")) {
      throw new ErrorCustom(
        400,
        `File ${file.originalname} is invalid (only image or video file)`
      );
    }

    return cloudinary.uploader.upload(filePath, {
      folder: folder || "default",
      resource_type: mimetype.startsWith("video/") ? "video" : "image",
    });
  });

  const results = await Promise.all(uploadPromises);

  return results.length === 1
    ? {
      url: results[0].secure_url,
      publicId: results[0].public_id,
      resourceType: results[0].resource_type,
    }
    : results.map((r) => ({
      url: r.secure_url,
      publicId: r.public_id,
      resourceType: r.resource_type,
    }));
});

export const deleteFiles = HandlerCustom(async (publicIds: string | string[]) => {
  const ids = Array.isArray(publicIds) ? publicIds : [publicIds];

  if (ids.length === 0) {
    throw new ErrorCustom(400, "List public id is empty");
  }

  const deletePromises = ids.map((publicId) =>
    cloudinary.uploader.destroy(publicId).then((result) => ({
      publicId,
      result,
    }))
  );

  return await Promise.all(deletePromises);
});
