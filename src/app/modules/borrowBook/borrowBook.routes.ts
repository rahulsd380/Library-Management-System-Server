import express from 'express';
import { BorrowBookControllers } from './borrowBook.controller';

const router = express.Router();

router.post('/', BorrowBookControllers.borrowBook);
router.get('/overdue', BorrowBookControllers.getOverdueBorrows);

export const BorrowBookRoutes = router;
