// borrowBook.controller.ts
import { Request, Response } from "express";
import { catchAsync } from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { BorrowBookServices } from "../borrowBook/borrowBook.service";
import { ReturnBookServices } from "./returnBook.service";

// Return Book
const returnBook = catchAsync(async (req: Request, res: Response) => {
    const { borrowId } = req.body;
    const result = await ReturnBookServices.returnBook(borrowId);
    sendResponse(res, {
        success: true,
        status: 200,
        message: "Book returned successfully"
    });
});

export const ReturnBookControllers = {
    returnBook,
};
