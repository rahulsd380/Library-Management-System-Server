"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnBookRoutes = void 0;
// returnBook.routes.ts
const express_1 = __importDefault(require("express"));
const returnBook_controller_1 = require("./returnBook.controller");
const router = express_1.default.Router();
router.post('/', returnBook_controller_1.ReturnBookControllers.returnBook);
exports.ReturnBookRoutes = router;
