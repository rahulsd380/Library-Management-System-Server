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

// Get all books
const getSingleBookById = async (bookId:string) => {
    const result = await prisma.book.findUniqueOrThrow({
        where : {
            bookId : bookId
        }
    })
    return result;
};


// const getAdminById = async (id:string) : Promise<Book | null> => {
//     const result = await prisma.book.findUnique({
//         where : {
//             id,
//             isDeleted : false
//         }
//     });
//     return result;
// };

// const updateAdminData = async (id:string, data : Partial<Admin>): Promise<Admin> => {
//     const isAdminExists = await prisma.admin.findUnique({
//         where : {
//             id,
//             isDeleted : false
//         }
//     });
//     if(!isAdminExists){
//         throw new Error("Admin not found");
//     }
//     const result = await prisma.admin.update({
//         where : {
//             id,
//             isDeleted : false
//         },
//         data
//     });
//     return result;
// };

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
    getSingleBookById
}