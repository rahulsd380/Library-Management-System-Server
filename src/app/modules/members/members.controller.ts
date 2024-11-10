import { Request, Response } from "express"
import { catchAsync } from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { MemberServices } from "./members.service";

// Add new book
const addMember = catchAsync(async (req: Request, res: Response) => {
    const result = await MemberServices.addMember(req.body);
    sendResponse(res, {
        success: true,
        status: 201,
        message: "Member created successfully",
        data: result
    });
})


// Get all members
const getAllMembers = catchAsync(async (req: Request, res: Response) => {
    const result = await MemberServices.getAllMembers();
    sendResponse(res, {
        success: true,
        status: 200,
        message: "Members retrieved successfully",
        data: result
    });
})


// Get single member by id
const getSingleMemberById = catchAsync(async (req: Request, res: Response) => {
    const {memberId} = req.params;
    const result = await MemberServices.getSingleMemberById(memberId);
    sendResponse(res, {
        success: true,
        status: 200,
        message: "Member retrieved successfully",
        data: result
    });
})


// Update book data
const updateMemberData = catchAsync(async (req: Request, res: Response) => {
    const {memberId} = req.params;
    const result = await MemberServices.updateMemberData(memberId, req.body);
    sendResponse(res, {
        success: true,
        status: 200,
        message: "Member updated successfully",
        data: result
    });
})

// Delete member by id
const deleteMemberById = catchAsync(async (req: Request, res: Response) => {
    const {memberId} = req.params;
    await MemberServices.deleteMemberById(memberId);
    sendResponse(res, {
        success: true,
        status: 200,
        message: "Member successfully deleted",
    });
})


export const MemberControllers = {
    addMember,
    getAllMembers,
    getSingleMemberById,
    updateMemberData,
    deleteMemberById,
}