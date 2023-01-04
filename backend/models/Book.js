const mongoose = require('mongoose');

//Blueprint on how our document within a collection should look!
const BookSchema = new mongoose.Schema({
  title: {
   type: String,
   required: [true, "name can not be empty"], 
  },
  timestamps: true 
// this will add a time stamp with the fields createdAt and updatedAt
});


const Book = mongoose.model('Product', BookSchema);
module.exports = Book;