let bookCollection = [{ 
    title: "Moby-x", 
    author: "Herman Melville", 
    year: 1851, 
    genre: "Adventure" 
}];


// Add a New Book
// Create a function that takes the book's title, author, year of publication, and genre as parameters and adds the book to the collection.
addBook = (title, author, year, genre) => {
    const book = {};

    book.title = title;
    book.author = author;
    book.year = year;
    book.genre = genre;

    bookCollection.push(book);
}

addBook("Pride and Prejudice", "Jane Austen", 1813, "Adventure");
console.log("New Book Added: ", bookCollection);



// Remove a Book by Title
// Create a function that takes a book's title as a parameter and removes the book from the collection if it exists.
const deleteTitle = "1984";
addBook(deleteTitle, "-", 0, "-");

removeBookByTitle = (title) => {
    //bookCollection = bookCollection.filter(bookCollection => bookCollection.title !== title);

    //TODO: delete item from book collection directly
    const index = bookCollection.findIndex(bookCollection => bookCollection.title === title);
    if (index !== -1) {
        bookCollection.splice(index, 1);
    }

}

removeBookByTitle(deleteTitle);
console.log("Book Removed: ", bookCollection);



// Find a Book by Author
// Create a function that takes an author's name as a parameter and returns an array of books written by that author.
findBookByAuthor = (author) => {
    return result = bookCollection.find(book => {
        return book.author === author
    });
}

console.log("Find book by Author Herman Melville: ", findBookByAuthor("Herman Melville"));


// List All Books
// Create a function that returns an array of all books in the collection.
listAllBooks = () => {
    console.log("Listing Array of All Books:");
    console.log(bookCollection);
}
listAllBooks();


// Update the Genre of a Book
// Create a function that takes a book's title and a new genre as parameters and updates the book's genre if it exists in the collection.
updateBookGenre = (title, genre) => {
    const updateBook = bookCollection.find(book => {
        return book.title === title
    });

    if (updateBook) {
        updateBook.genre = genre
    }
}
updateBookGenre("Moby-x", "Classic");
console.log("Updated Genre of book: ", bookCollection);