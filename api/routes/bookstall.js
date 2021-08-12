const bookscontroller = require('../controllers/books');
const bookstall = require('express').Router();


// Get All books
bookstall.get('/books',bookscontroller.getAllBooks);
// Get Book details passing id as parameter
bookstall.get('/books/:id',bookscontroller.getById);


module.exports = bookstall;