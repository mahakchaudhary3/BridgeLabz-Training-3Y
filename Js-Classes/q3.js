// Q3: Library Management System (Classes + Objects)

// Create a Book class
class Book {
    constructor(title, author, ISBN, isIssued = false) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = isIssued;
    }

    // Method to issue a book
    issueBook() {
        if (!this.isIssued) {
            this.isIssued = true;
            console.log(`"${this.title}" has been issued successfully.`);
        } else {
            console.log(`"${this.title}" is already issued.`);
        }
    }

    // Method to return a book
    returnBook() {
        if (this.isIssued) {
            this.isIssued = false;
            console.log(`"${this.title}" has been returned successfully.`);
        } else {
            console.log(`"${this.title}" is already available.`);
        }
    }
}

// Create multiple book objects
const book1 = new Book("JavaScript Basics", "John Smith", "101");
const book2 = new Book("Web Development", "David Miller", "102");
const book3 = new Book("Python Programming", "James Brown", "103");
const book4 = new Book("Data Structures", "Robert Wilson", "104");

// Store books in an array
const books = [book1, book2, book3, book4];

// Function to display all available books
function displayAvailableBooks() {
    // Filter books that are not issued
    const availableBooks = books.filter(book => !book.isIssued);

    console.log("\nAvailable Books:");

    if (availableBooks.length === 0) {
        console.log("No books are currently available.");
    } else {
        availableBooks.forEach(book => {
            console.log(
                `Title: ${book.title}, Author: ${book.author}, ISBN: ${book.ISBN}`
            );
        });
    }
}

// Function to issue a book by searching its ISBN
function issueBookByISBN(isbn) {
    // Find the book using its ISBN
    const book = books.find(book => book.ISBN === isbn);

    if (book) {
        book.issueBook();
    } else {
        console.log("Book not found!");
    }
}

// Display available books before issuing
displayAvailableBooks();

// Issue a book by ISBN
issueBookByISBN("102");

// Display available books after issuing
displayAvailableBooks();

// Return the issued book
book2.returnBook();

// Display available books after returning
displayAvailableBooks();
