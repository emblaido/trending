const mongoose = require('mongoose')
 
const WordSchema = new mongoose.Schema({
    name: {type: String, require: [true, "name cannot be empty"]},
    description: {type: String, require: [true, "description cannot be empty"]},
    link: {type: String},
},{timestamp: true});

const Word = mongoose.model('Word', WordSchema);

module.exports = Word