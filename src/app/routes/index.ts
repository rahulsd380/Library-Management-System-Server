import { Router } from "express";
import {BookRoutes } from "../modules/books/books.route";
import { MemberRoutes } from "../modules/members/members.route";
import { BorrowBookRoutes } from "../modules/borrowBook/borrowBook.routes";

const router = Router();

const moduleRoutes = [
  {
    path: "/books",
    route: BookRoutes,
  },
  {
    path: "/members",
    route: MemberRoutes,
  },
  {
    path: "/borrow",
    route: BorrowBookRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
