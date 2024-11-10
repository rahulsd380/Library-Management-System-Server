import express, { NextFunction, Request, Response } from 'express';
import { MemberControllers } from './members.controller';

const router = express.Router();

router.post('/', MemberControllers.addMember);
router.get('/', MemberControllers.getAllMembers);
router.get('/:memberId', MemberControllers.getSingleMemberById);
router.put('/:memberId', MemberControllers.updateMemberData);
router.delete('/:memberId', MemberControllers.deleteMemberById);

export const MemberRoutes = router;