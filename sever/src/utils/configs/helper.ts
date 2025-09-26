import multer from 'multer';
import path from 'path';
import fs from 'fs';

// Đảm bảo thư mục uploads tồn tại
const uploadDir = path.join(process.cwd(), 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Cấu hình lưu trữ file
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

// Lọc file upload
const fileFilter = (req: any, file: any, cb: any) => {
    // Chấp nhận hình ảnh và các file phổ biến
    const allowedFileTypes = [
        'image/jpeg',
        'image/png',
        'image/gif',
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/vnd.ms-excel',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    ];

    if (allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Định dạng file không được hỗ trợ!'), false);
    }
};

// Cấu hình upload
export const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 5 * 1024 * 1024 // Giới hạn 5MB
    }
});

// Hàm chuyển đổi formdata sang object
export const formDataToObject = (req: any) => {
    const result = { ...req.body };

    // Thêm các file đã upload vào object (nếu có)
    if (req.file) {
        result.file = {
            filename: req.file.filename,
            path: req.file.path,
            originalname: req.file.originalname,
            mimetype: req.file.mimetype
        };
    }

    if (req.files && Array.isArray(req.files)) {
        // Xử lý files là một mảng (từ upload.any())
        result.files = req.files.map((file: any) => ({
            fieldname: file.fieldname,
            filename: file.filename,
            path: file.path,
            originalname: file.originalname,
            mimetype: file.mimetype
        }));
    }

    return result;
};

// Hàm xử lý các loại dữ liệu khác nhau
export const parseRequestData = (req: any) => {
    const contentType = req.headers['content-type'] || '';

    if (contentType.includes('multipart/form-data')) {
        return formDataToObject(req);
    } else if (contentType.includes('application/json')) {
        return req.body;
    } else if (contentType.includes('application/x-www-form-urlencoded')) {
        return req.body;
    }

    return { ...req.body, ...req.query };
};
