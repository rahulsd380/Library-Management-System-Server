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
exports.MemberServices = void 0;
const prisma_1 = require("../../../shared/prisma");
// Add new member
const addMember = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.member.create({
        data: payload
    });
    return result;
});
// Get all members
const getAllMembers = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.member.findMany();
    return result;
});
// Get single member by id
const getSingleMemberById = (memberId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.member.findUniqueOrThrow({
        where: {
            memberId: memberId
        }
    });
    return result;
});
// Update member data
const updateMemberData = (memberId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.prisma.member.findUniqueOrThrow({
        where: {
            memberId,
        }
    });
    const result = yield prisma_1.prisma.member.update({
        where: {
            memberId
        },
        data: payload
    });
    return result;
});
// Delete member by id
const deleteMemberById = (memberId) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.prisma.member.findUniqueOrThrow({
        where: {
            memberId,
        }
    });
    const result = yield prisma_1.prisma.member.delete({
        where: {
            memberId
        }
    });
    return result;
});
exports.MemberServices = {
    addMember,
    getAllMembers,
    getSingleMemberById,
    updateMemberData,
    deleteMemberById
};
