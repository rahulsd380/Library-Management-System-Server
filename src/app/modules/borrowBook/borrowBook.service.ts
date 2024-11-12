// Service: borrowBook.service.ts
import { BorrowRecord } from "@prisma/client";
import { prisma } from "../../../shared/prisma";
import { subDays } from "date-fns";

// Borrow Book
const borrowBook = async (payload: BorrowRecord) => {
    const result = await prisma.borrowRecord.create({
        data: payload
    });
    return result;
};

// Get Overdue Books
const getOverdueBorrows = async () => {
    const fourteenDays = subDays(new Date(), 14);


    const overdueBorrows = await prisma.borrowRecord.findMany({
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
};

export const BorrowBookServices = {
    borrowBook,
    getOverdueBorrows,
};
