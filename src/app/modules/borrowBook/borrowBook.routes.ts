import express from 'express';
import { BorrowBookControllers } from './borrowBook.controller';

const router = express.Router();

router.post('/', BorrowBookControllers.borrowBook);

export const BorrowBookRoutes = router;