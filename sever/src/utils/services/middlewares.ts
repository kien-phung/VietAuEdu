import { NextFunction, Response } from "express";

export const isAdmin = (req: IAuthenticatedRequest) => req.userRole === 'ADMIN';

export const isOwner = (req: IAuthenticatedRequest) => req.headers['x-user-id'] === req.params.userId;

export const hasPermission = (...checks: ((req: IAuthenticatedRequest) => boolean)[]) => {
    return (req: IAuthenticatedRequest, res: Response, next: NextFunction) => {
        if (checks.every(check => check(req))) {
            return next();
        }
        return res.status(403).json({
            message: "Bạn không có quyền thực hiện hành động này"
        });
    };
};

export const hasOneOfPermission = (...checks: ((req: any) => boolean)[]) => {
    return (req: IAuthenticatedRequest, res: Response, next: NextFunction) => {
        if (checks.some(check => check(req))) {
            return next();
        }
        return res.status(403).json({
            message: "Bạn không có quyền thực hiện hành động này"
        });
    };
};