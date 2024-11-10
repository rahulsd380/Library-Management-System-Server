import { Router } from "express";
import { UserRoutes } from "../modules/user/user.routes";
import {BookRoutes } from "../modules/books/books.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/books",
    route: BookRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
