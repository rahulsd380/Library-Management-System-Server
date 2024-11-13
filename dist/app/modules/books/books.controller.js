"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookControllers = void 0;
const books_service_1 = require("./books.service");
const catchAsync_1 = require("../../../shared/catchAsync");
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
// Add new book
const addBook = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield books_service_1.BookServices.addBook(req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: 201,
        message: "Book Added Successfully.",
        data: result
    });
}));
// Get all books
const getAllBooks = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield books_service_1.BookServices.getAllBooks();
    (0, sendResponse_1.default)(res, {
        success: true,
        status: 200,
        message: "Books retrieved successfully",
        data: result
    });
}));
// Get single book by id
const getSingleBookById = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { bookId } = req.params;
    const result = yield books_service_1.BookServices.getSingleBookById(bookId);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: 200,
        message: "Book retrieved successfully",
        data: result
    });
}));
// Update book data
const updateBookData = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { bookId } = req.params;
    const result = yield books_service_1.BookServices.updateBookData(bookId, req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: 200,
        message: "Book updated successfully",
        data: result
    });
}));
// Delete book by id
const deleteBookById = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { bookId } = req.params;
    yield books_service_1.BookServices.deleteBookById(bookId);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: 200,
        message: "Book successfully deleted",
    });
}));
exports.BookControllers = {
    addBook,
    getAllBooks,
    getSingleBookById,
    updateBookData,
    deleteBookById,
};
