const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const book = new Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    author: { type: String, required: true },
    qtdPag: { type: Number, required: true },
    sinopse: { type: String, required: true },
})

module.exports = mongoose.model('Book', book);