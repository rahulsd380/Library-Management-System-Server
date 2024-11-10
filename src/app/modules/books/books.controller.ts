import { Request, Response } from "express"
import { BookServices } from "./books.service";
import { catchAsync } from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";

// Add new book
const addBook = catchAsync(async (req: Request, res: Response) => {
    const result = await BookServices.addBook(req.body);
    sendResponse(res, {
        success: true,
        status: 201,
        message: "Book Added Successfully.",
        data: result
    });
})


// Get all books
const getAllBooks = catchAsync(async (req: Request, res: Response) => {
    const result = await BookServices.getAllBooks();
    sendResponse(res, {
        success: true,
        status: 200,
        message: "Books retrieved successfully",
        data: result
    });
})


// Get single book by id
const getSingleBookById = catchAsync(async (req: Request, res: Response) => {
    const {bookId} = req.params;
    const result = await BookServices.getSingleBookById(bookId);
    sendResponse(res, {
        success: true,
        status: 200,
        message: "Book retrieved successfully",
        data: result
    });
})


// Update book data
const updateBookData = catchAsync(async (req: Request, res: Response) => {
    const {bookId} = req.params;
    const result = await BookServices.updateBookData(bookId, req.body);
    sendResponse(res, {
        success: true,
        status: 200,
        message: "Book updated successfully",
        data: result
    });
})

// Delete book by id
const deleteBookById = catchAsync(async (req: Request, res: Response) => {
    const {bookId} = req.params;
    const result = await BookServices.deleteBookById(bookId);
    sendResponse(res, {
        success: true,
        status: 200,
        message: "Book successfully deleted",
    });
})


export const BookControllers = {
    addBook,
    getAllBooks,
    getSingleBookById,
    updateBookData,
    deleteBookById,
}