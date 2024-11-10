import { BorrowRecord } from "@prisma/client";
import { prisma } from "../../../shared/prisma";

// Borrow Book
const borrowBook = async (payload: BorrowRecord) => {
    const result = await prisma.borrowRecord.create({
        data: payload
    });
    return result;
};


export const BorrowBookServices = {
    borrowBook
}