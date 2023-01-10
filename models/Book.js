const mongoose = require('mongoose');

//Blueprint on how our document within a collection should look!
const BookSchema = new mongoose.Schema({
  image: String,
  name: {type: String, require: true},
  author: String,
  description: String,
  },
  // link: String
{timestamps: true 
// this will add a time stamp with the fields createdAt and updatedAt
});


const Book = mongoose.model('Book', BookSchema);
module.exports = Book;