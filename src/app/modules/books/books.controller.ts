import { Request, Response } from "express"
import { BookServices } from "./books.service";
import { catchAsync } from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";


const addBook = catchAsync(async (req: Request, res: Response) => {
    const result = await BookServices.addBook(req.body);

    sendResponse(res, {
        success: true,
        status: 201,
        message: "Book Added Successfully.",
        data: result
    });
})

// const getAdminById = catchAsync(async (req: Request, res: Response) => {
//     const { id } = req.params;
//     const result = await AdminServices.getAdminById(id);
//     sendResponse(res, {
//         statusCode: 200,
//         success: true,
//         message: "Admin Fetched Successfully.",
//         data: result
//     });
// })

// const updateAdminData = catchAsync(async (req: Request, res: Response) => {

//     const { id } = req.params;
//     const result = await AdminServices.updateAdminData(id, req.body);
//     sendResponse(res, {
//         statusCode: 200,
//         success: true,
//         message: "Admin Data Updated Successfully.",
//         data: result
//     })
// })

// const deleteAdmin = catchAsync(async (req: Request, res: Response) => {
//     const { id } = req.params;
//     const result = await AdminServices.deleteAdmin(id);
//     sendResponse(res, {
//         statusCode: 200,
//         success: true,
//         message: "Admin Deleted Successfully.",
//         data: result
//     })
// })


export const BookControllers = {
    addBook,
}