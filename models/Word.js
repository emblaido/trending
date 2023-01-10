const mongoose = require('mongoose')
 
const WordSchema = new mongoose.Schema({
    name: {type: String, require: true},
    image: String,
    description: String,
},{timestamp: true});

const Word = mongoose.model('Word', WordSchema);

module.exports = Word