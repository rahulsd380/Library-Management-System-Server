import { Request, Response } from "express"
import { catchAsync } from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { BorrowBookServices } from "./borrowBook.service";

// Borrow Book
const borrowBook = catchAsync(async (req: Request, res: Response) => {
    const result = await BorrowBookServices.borrowBook(req.body);
    sendResponse(res, {
        success: true,
        status: 200,
        message: "Book borrowed successfully",
        data: {
            borrowId: result.borrowId,
            bookId: result.bookId,
            memberId: result.memberId,
            borrowDate: result.borrowDate
        }
    });
});



export const BorrowBookControllers = {
    borrowBook
}