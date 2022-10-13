const express = require('express');
const router = express.Router();
const BooksController = require('../controllers/BooksController');

router.get('/', BooksController.showBooks);
router.get('/add', BooksController.addBook);
router.get('/edit/:id', BooksController.editBook);
router.get('/sinopse/:id', BooksController.sinopseBook);

router.post('/add', BooksController.addBookPost);
router.post('/edit', BooksController.editBookPost); 
router.post('/delete', BooksController.deleteBook); 

module.exports = router;