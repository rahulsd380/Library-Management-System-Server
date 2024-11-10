// returnBook.routes.ts
import express from 'express';
import { ReturnBookControllers } from './returnBook.controller';

const router = express.Router();

router.post('/', ReturnBookControllers.returnBook);

export const ReturnBookRoutes = router;