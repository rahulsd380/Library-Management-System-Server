import { prisma } from "../../../shared/prisma";

// Return Book
const returnBook = async (borrowId: string) => {
    const result = await prisma.borrowRecord.update({
        where: { borrowId },
        data: { returnDate: new Date() },
    });
    return result;
};


export const ReturnBookServices = {
    returnBook,
}