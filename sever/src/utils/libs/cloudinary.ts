import { v2 as cloudinary } from "cloudinary";
import { ErrorCustom, HandlerCustom } from "../configs/custom.js";
import { CLOUDINARY_URL } from "../configs/constants.js";
import fs from 'fs';

// // Configure cloudinary with URL from environment variables
cloudinary.config({
  cloud_name: CLOUDINARY_URL.split('@')[1],
  api_key: CLOUDINARY_URL.split('://')[1].split(':')[0],
  api_secret: CLOUDINARY_URL.split(':')[2].split('@')[0]
});

export const uploadFiles = HandlerCustom(async (
  files: Express.Multer.File | Express.Multer.File[],
  folder?: string
) => {
  const fileArray = Array.isArray(files) ? files : [files];

  if (fileArray.length === 0) {
    throw new ErrorCustom(400, "No files to upload");
  }

  const uploadPromises = fileArray.map(async (file) => {
    const { path: filePath, mimetype, originalname } = file;

    console.log(`Processing file: ${originalname}, path: ${filePath}, mimetype: ${mimetype}`);

    // Verify file exists
    if (!fs.existsSync(filePath)) {
      throw new ErrorCustom(
        404,
        `File not found at path: ${filePath}`
      );
    }

    if (!mimetype.startsWith("image/") && !mimetype.startsWith("video/")) {
      throw new ErrorCustom(
        400,
        `File ${originalname} is invalid (only image or video file)`
      );
    }

    try {
      console.log(`Uploading to Cloudinary: ${filePath}`);

      // Use readFileSync to get file buffer instead of relying on path
      const fileBuffer = fs.readFileSync(filePath);

      // Convert buffer to base64 string for Cloudinary
      const fileBase64 = `data:${mimetype};base64,${fileBuffer.toString('base64')}`;

      const result = await cloudinary.uploader.upload(fileBase64, {
        folder: folder || "default",
        resource_type: mimetype.startsWith("video/") ? "video" : "image",
      });

      console.log(`Upload successful, URL: ${result.secure_url}`);

      // Delete the local file after successful upload
      try {
        fs.unlinkSync(filePath);
        console.log(`Local file deleted: ${filePath}`);
      } catch (deleteErr) {
        console.error(`Error deleting local file: ${filePath}`, deleteErr);
        // Non-critical error, don't throw
      }

      return result;
    } catch (err) {
      console.error(`Error uploading to Cloudinary: ${filePath}`, err);
      throw new ErrorCustom(500, `Failed to upload ${originalname}: ${err instanceof Error ? err.message : String(err)}`);
    }
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

// Export cloudinary instance as default
export default cloudinary;
