import { Book } from "@prisma/client";
import { prisma } from "../../../shared/prisma";

// Add new book
const addBook = async (payload: Book) => {
    const result = await prisma.book.create({
        data:payload
    });
    return result;
};

// Get all books
const getAllBooks = async () => {
    const result = await prisma.book.findMany()
    return result;
};

// Get single book by id
const getSingleBookById = async (bookId:string) => {
    const result = await prisma.book.findUniqueOrThrow({
        where : {
            bookId : bookId
        }
    })
    return result;
};

// Update book data
const updateBookData = async (bookId:string, payload : Partial<Book>): Promise<Book> => {
    await prisma.book.findUniqueOrThrow({
        where : {
            bookId,
        }
    });
    
    const result = await prisma.book.update({
        where : {
            bookId
        },
        data : payload
    });
    return result;
};

// Delete book by id
const deleteBookById = async (bookId:string): Promise<Book> => {
    await prisma.book.findUniqueOrThrow({
        where : {
            bookId,
        }
    });
    const result = await prisma.book.delete({
        where : {
            bookId
        }
    });
    return result;
};

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


export const BookServices = {
    addBook,
    getAllBooks,
    getSingleBookById,
    updateBookData,
    deleteBookById
}