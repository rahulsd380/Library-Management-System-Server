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
exports.BorrowBookServices = void 0;
const prisma_1 = require("../../../shared/prisma");
const date_fns_1 = require("date-fns");
// Borrow Book
const borrowBook = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.borrowRecord.create({
        data: payload
    });
    return result;
});
// Get Overdue Books
const getOverdueBorrows = () => __awaiter(void 0, void 0, void 0, function* () {
    const fourteenDays = (0, date_fns_1.subDays)(new Date(), 14);
    const overdueBorrows = yield prisma_1.prisma.borrowRecord.findMany({
        where: {
            borrowDate: { lte: fourteenDays },
            returnDate: null,
        },
        include: {
            book: {
                select: { title: true }
            },
            member: {
                select: { name: true }
            }
        }
    });
    const overdueList = overdueBorrows.map(record => {
        const overdueDays = Math.floor((new Date().getTime() - record.borrowDate.getTime()) / (1000 * 60 * 60 * 24)) - 14;
        return {
            borrowId: record.borrowId,
            bookTitle: record.book.title,
            borrowerName: record.member.name,
            overdueDays,
        };
    });
    return overdueList;
});
exports.BorrowBookServices = {
    borrowBook,
    getOverdueBorrows,
};
