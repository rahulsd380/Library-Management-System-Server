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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookServices = void 0;
const prisma_1 = require("../../../shared/prisma");
const AppError_1 = require("../../../helpers/AppError");
// Add new book
const addBook = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.book.create({
        data: payload
    });
    return result;
});
// Get all books
const getAllBooks = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.book.findMany();
    return result;
});
// Get single book by id
const getSingleBookById = (bookId) => __awaiter(void 0, void 0, void 0, function* () {
    if (!bookId) {
        return new AppError_1.AppError('Invalid book ID', 400);
    }
    const result = yield prisma_1.prisma.book.findUniqueOrThrow({
        where: {
            bookId: bookId
        }
    });
    return result;
});
// Update book data
const updateBookData = (bookId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.prisma.book.findUniqueOrThrow({
        where: {
            bookId,
        }
    });
    const result = yield prisma_1.prisma.book.update({
        where: {
            bookId
        },
        data: payload
    });
    return result;
});
// Delete book by id
const deleteBookById = (bookId) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.prisma.book.findUniqueOrThrow({
        where: {
            bookId,
        }
    });
    const result = yield prisma_1.prisma.book.delete({
        where: {
            bookId
        }
    });
    return result;
});
// const deleteAdmin = async (id:string): Promise<Admin | null> => {
//     const result = await prisma.$transaction(async(transactionClient) => {
//         const adminDeletedData = await transactionClient.admin.delete({
//             where : {
//                 id
//             }
//         });
//         const userDeletedData = await transactionClient.user.delete({
//             where : {
//                 email : adminDeletedData.email
//             }
//         });
//         return adminDeletedData
//     });
//     return result;
// };
exports.BookServices = {
    addBook,
    getAllBooks,
    getSingleBookById,
    updateBookData,
    deleteBookById
};
