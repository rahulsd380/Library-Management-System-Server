import { Router } from "express";
import {BookRoutes } from "../modules/books/books.route";
import { MemberRoutes } from "../modules/members/members.route";

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
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
