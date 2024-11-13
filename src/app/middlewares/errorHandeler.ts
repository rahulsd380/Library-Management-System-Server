import { Request, Response, NextFunction } from 'express';
import { AppError } from '../../helpers/AppError';

export const errorHandler = (err: AppError, req: Request, res: Response, next: NextFunction) => {
  const status = err.status || 500;
  const message = err.message || 'An unexpected error occurred';

  res.status(status).json({
    success: false,
    status,
    message,
  });
};
