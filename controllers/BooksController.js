const Book = require('../models/Book');

module.exports = class BooksController{
    static async showBooks(req,res){

        const books = await Book.find().lean();

        res.render('books/all', { books });
    }

    static addBook(req,res){
        res.render('books/insertBook');
    }

    static async addBookPost(req,res){
        const { name, image, author, qtdPag, sinopse } = req.body;

        const book = new Book({
            name, image, author, qtdPag, sinopse
        });

        await book.save();

        res.redirect('/books');
    }

    static async editBook(req,res){
        const { id } = req.params;
        console.log(id);


        
        const book = await Book.findById(id).lean();
        console.log(book);

        res.render('books/editBook', { book })
    }

    static async editBookPost(req,res){
        const { name, image, author, qtdPag, sinopse, id } = req.body;

        const newBook = {
            name, image, author, qtdPag, sinopse
        };

        await Book.updateOne({ _id: id }, newBook);

        res.redirect('/books');
    }

    static async sinopseBook(req,res){
        const { id } = req.params;
        console.log(id);

        const book = await Book.findById(id).lean();

        res.render('books/book', { book })
    }

    static async deleteBook(req,res){
        const { id } = req.body;

        await Book.findByIdAndDelete(id);
        
        res.redirect('/books');
    }
}

