"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const books_route_1 = require("../modules/books/books.route");
const members_route_1 = require("../modules/members/members.route");
const borrowBook_routes_1 = require("../modules/borrowBook/borrowBook.routes");
const returnBook_routes_1 = require("../modules/returnBook/returnBook.routes");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/books",
        route: books_route_1.BookRoutes,
    },
    {
        path: "/members",
        route: members_route_1.MemberRoutes,
    },
    {
        path: "/borrow",
        route: borrowBook_routes_1.BorrowBookRoutes,
    },
    {
        path: "/return",
        route: returnBook_routes_1.ReturnBookRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
