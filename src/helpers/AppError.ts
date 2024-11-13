export class AppError extends Error {
    public status: number;
    public success: boolean;
  
    constructor(message: string, status: number) {
      super(message);
      this.status = status;
      this.success = false;
      Error.captureStackTrace(this, this.constructor);
    }
  }
  