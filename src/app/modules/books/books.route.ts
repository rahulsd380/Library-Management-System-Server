import express, { NextFunction, Request, Response } from 'express';
import { BookControllers } from './books.controller';

const router = express.Router();

router.post('/', BookControllers.addBook);
router.get('/', BookControllers.getAllBooks);
router.get('/:bookId', BookControllers.getSingleBookById);
router.put('/:bookId', BookControllers.updateBookData);
router.delete('/:bookId', BookControllers.deleteBookById);
// router.get("/:id", AdminControllers.getAdminById);
// router.patch("/:id", validateRequest(adminValidationsSchemas.updateAdminInfo), AdminControllers.updateAdminData);
// router.delete("/:id", AdminControllers.deleteAdmin);
// router.delete("/soft/:id", AdminControllers.softDeleteAdmin);

export const BookRoutes = router;