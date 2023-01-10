const mongoose = require('mongoose');

//Blueprint on how our document within a collection should look!
const BookSchema = new mongoose.Schema({
  image:{
    type: String,
    require: [true, "Image can not be empty" ]
  },
  title: {
   type: String,
   require: [true, "Title can not be empty"], 
  },
  author:{
    type: String,
    require: [true, "Author can not be empty" ]
  },
  description:{
    type: String,
    require: [true, "Description can not be empty" ]
  },
  link: String
},
{timestamps: true 
// this will add a time stamp with the fields createdAt and updatedAt
});


const Book = mongoose.model('Book', BookSchema);
module.exports = Book;