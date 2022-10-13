const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const port = 3000;
const booksRoutes = require('./routes/booksRoutes');

const conn = require('./db/conn');

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/books', booksRoutes)

app.listen(port, ()=>{ console.log('Server running...') });