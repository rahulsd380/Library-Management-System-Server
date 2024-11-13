# 📚 Library Management System API

A backend API for managing a library’s book catalog, memberships, and borrowing activities. Built with Node.js, Express.js, Prisma ORM, and PostgreSQL, this API facilitates CRUD operations for books, members, and borrow records while implementing key library functions such as borrowing and returning books.

## 🚀 Live URL
Access the live backend [here](https://your-deployed-backend-url.com)

## 🛠️ Technology Stack & Packages
- **Node.js**
- **Express.js**
- **Prisma ORM** - Database management
- **PostgreSQL** - Database
- **TypeScript** - Type safety
- **UUID** - Unique ID generation

## 📂 Database Schema
### 1. Book Table
| Field          | Type   | Description                                   |
| -------------- | ------ | --------------------------------------------- |
| `bookId`       | UUID   | Unique identifier for each book               |
| `title`        | String | Title of the book                             |
| `genre`        | String | Genre or category of the book                 |
| `publishedYear`| Int    | Year the book was published                   |
| `totalCopies`  | Int    | Total copies of the book                      |
| `availableCopies`| Int  | Number of copies currently available          |

### 2. Member Table
| Field           | Type    | Description                                   |
| --------------- | ------- | --------------------------------------------- |
| `memberId`      | UUID    | Unique identifier for each member             |
| `name`          | String  | Name of the library member                    |
| `email`         | String  | Member’s email (unique)                       |
| `phone`         | String  | Member’s contact number                       |
| `membershipDate`| DateTime| Date the member joined the library            |

### 3. BorrowRecord Table
| Field         | Type    | Description                                   |
| ------------- | ------- | --------------------------------------------- |
| `borrowId`    | UUID    | Unique identifier for each borrow record      |
| `borrowDate`  | DateTime| Date when the book was borrowed               |
| `returnDate`  | DateTime| Date when the book was returned (nullable)    |
| `bookId`      | UUID    | Foreign key referencing `Book`                |
| `memberId`    | UUID    | Foreign key referencing `Member`              |

## 📑 Features & Routes

### 1. Book CRUD Operations
- **Create Book** - `POST /api/books`
- **Get All Books** - `GET /api/books`
- **Get Book by ID** - `GET /api/books/:bookId`
- **Update Book** - `PUT /api/books/:bookId`
- **Delete Book** - `DELETE /api/books/:bookId`

### 2. Member CRUD Operations
- **Create Member** - `POST /api/members`
- **Get All Members** - `GET /api/members`
- **Get Member by ID** - `GET /api/members/:memberId`
- **Update Member** - `PUT /api/members/:memberId`
- **Delete Member** - `DELETE /api/members/:memberId`

### 3. Borrow & Return Books
- **Borrow a Book** - `POST /api/borrow`
- **Return a Book** - `POST /api/return`

### 4. Bonus Features
- **Overdue Borrow List** - `GET /api/borrow/overdue`

## 📜 Setup Instructions

1. **Clone the Repository**
    ```bash
    git clone "repo link"
    cd library-management-system
    ```

2. **Install Dependencies**
    ```bash
    npm install
    ```

3. **Configure Environment Variables**
   Create a `.env` file with the following variables:
    ```plaintext
    DATABASE_URL=your_postgresql_database_url
    PORT=your_server_port
    ```

4. **Initialize Prisma**
    ```bash
    npx prisma migrate dev --name init
    ```

5. **Run the Application**
    ```bash
    npm start
    ```

## 📋 Key Features & Functionality
- **CRUD for Books and Members** - Efficient handling of library resources and membership.
- **Borrow & Return Tracking** - Real-time updates on book availability and borrowing status.
- **Overdue Notifications** - Automatically track and list overdue books.
- **Error Handling** - Unified error responses for easy troubleshooting.

## 🐞 Known Issues / Bugs
- **[Optional] List any known issues or areas for improvement.**

## 📝 Professional Formatting
This README is formatted for easy navigation and usability, providing essential information at a glance.

## 📑 Routes Example Code

---

### **Features & Routes Code Implementation**

#### **Book Routes** (`routes/books.ts`)

```typescript
import { Router } from 'express';
import { createBook, getAllBooks, getBookById, updateBook, deleteBook } from '../controllers/bookController';

const router = Router();

router.post('/', createBook);
router.get('/', getAllBooks);
router.get('/:bookId', getBookById);
router.put('/:bookId', updateBook);
router.delete('/:bookId', deleteBook);

export default router;
