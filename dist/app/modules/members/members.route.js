"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberRoutes = void 0;
const express_1 = __importDefault(require("express"));
const members_controller_1 = require("./members.controller");
const router = express_1.default.Router();
router.post('/', members_controller_1.MemberControllers.addMember);
router.get('/', members_controller_1.MemberControllers.getAllMembers);
router.get('/:memberId', members_controller_1.MemberControllers.getSingleMemberById);
router.put('/:memberId', members_controller_1.MemberControllers.updateMemberData);
router.delete('/:memberId', members_controller_1.MemberControllers.deleteMemberById);
exports.MemberRoutes = router;
