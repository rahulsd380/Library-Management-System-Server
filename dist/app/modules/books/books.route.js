"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRoutes = void 0;
const express_1 = __importDefault(require("express"));
const books_controller_1 = require("./books.controller");
const router = express_1.default.Router();
router.post('/', books_controller_1.BookControllers.addBook);
router.get('/', books_controller_1.BookControllers.getAllBooks);
router.get('/:bookId', books_controller_1.BookControllers.getSingleBookById);
router.put('/:bookId', books_controller_1.BookControllers.updateBookData);
router.delete('/:bookId', books_controller_1.BookControllers.deleteBookById);
// router.get("/:id", AdminControllers.getAdminById);
// router.patch("/:id", validateRequest(adminValidationsSchemas.updateAdminInfo), AdminControllers.updateAdminData);
// router.delete("/:id", AdminControllers.deleteAdmin);
// router.delete("/soft/:id", AdminControllers.softDeleteAdmin);
exports.BookRoutes = router;
