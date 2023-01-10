const mongoose = require('mongoose')
const FashionSchema = new mongoose.Schema({
    name: {type: String, require: [true, "name cannot be empty"]},
    image: {type: String, require: [true, "image cannot be empty"]},
    description: {type: String, require: [true, "description cannot be empty"]},
    link: {type: String},
}, {timeStamps: true})

const Fashion = mongoose.model("Fashion", FashionSchema)

module.exports = Fashion