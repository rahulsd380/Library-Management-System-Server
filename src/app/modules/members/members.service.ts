import { Book, Member } from "@prisma/client";
import { prisma } from "../../../shared/prisma";

// Add new member
const addMember = async (payload: Member) => {
    const result = await prisma.member.create({
        data:payload
    });
    return result;
};

// Get all members
const getAllMembers = async () => {
    const result = await prisma.member.findMany()
    return result;
};

// Get single member by id
const getSingleMemberById = async (memberId:string) => {
    const result = await prisma.member.findUniqueOrThrow({
        where : {
            memberId : memberId
        }
    })
    return result;
};

// Update member data
const updateMemberData = async (memberId:string, payload : Partial<Member>): Promise<Member> => {
    await prisma.member.findUniqueOrThrow({
        where : {
            memberId,
        }
    });
    
    const result = await prisma.member.update({
        where : {
            memberId
        },
        data : payload
    });
    return result;
};

// Delete member by id
const deleteMemberById = async (memberId:string): Promise<Member> => {
    await prisma.member.findUniqueOrThrow({
        where : {
            memberId,
        }
    });
    const result = await prisma.member.delete({
        where : {
            memberId
        }
    });
    return result;
};


export const MemberServices = {
    addMember,
    getAllMembers,
    getSingleMemberById,
    updateMemberData,
    deleteMemberById
}