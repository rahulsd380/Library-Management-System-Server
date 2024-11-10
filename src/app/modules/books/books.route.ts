import express, { NextFunction, Request, Response } from 'express';
import { BookControllers } from './books.controller';

const router = express.Router();

router.post('/', BookControllers.addBook);
// router.get("/:id", AdminControllers.getAdminById);
// router.patch("/:id", validateRequest(adminValidationsSchemas.updateAdminInfo), AdminControllers.updateAdminData);
// router.delete("/:id", AdminControllers.deleteAdmin);
// router.delete("/soft/:id", AdminControllers.softDeleteAdmin);

export const BookRoutes = router;