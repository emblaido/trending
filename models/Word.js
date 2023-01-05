const mongoose = require('mongoose')
 
const WordSchema = new mongoose.Schema({
    name: String,
    image: String,
    title: String,
},{timestamp: true});

const Word = mongoose.model('Word', WordSchema);

module.exports = Word