import express, { NextFunction, Request, Response, urlencoded } from "express";
import router from "./app/routes";
import cookieParser from "cookie-parser";
import { AppError } from "./helpers/AppError";
import { errorHandler } from "./app/middlewares/errorHandeler";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use("/api", router);

// 404 Handler for undefined routes
app.use((req: Request, res: Response, next: NextFunction) => {
  next(new AppError("API NOT FOUND!", 404));
});

// Global error handler
app.use(errorHandler);

export default app;
