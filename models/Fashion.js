const mongoose = require('mongoose')
const FashionSchema = new mongoose.Schema({
    name: {type: String, require: true},
}, {timeStamps: true})

const Fashion = mongoose.model("Fashion", FashionSchema)

module.exports = Fashion