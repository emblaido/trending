const mongoose = require('mongoose')
const homeSchema = new mongoose.Schema({
    name: {type: String, require: true},
}, {timeStamps: true})

const Home = mongoose.model("Home", homeSchema)
//nothing
module.exports = Home