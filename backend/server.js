// require("dotenv").config();
// require("./config/db.connection")

// const {PORT, MONGODB_URI} = process.env;
// // console.log(MONGODB_URI)
// const express = require("express")

// const app = express()

// app.get("/meh", (req,res)=>{
//     res.send(" this works ")
// })

// app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));

const express = require("express")
const app = express()

require("dotenv").config();
require('./config/db.connection')

const {PORT, MONGODB_URI} = process.env;

// app dependencies 
const cors = require('cors')
const morgan = require ('morgan')

//controller import 
const bookController = require('./controllers/book_controller')
const fashionController = require('./controllers/fashion_controller')
const wordController = require('./controllers/word_controller')

//express / app middleware
app.use(express.json())

// //Cors helper function 
app.use(cors())

// //Morgan 
app.use(morgan('dev'))


app.use('/Fashion', fashionController)
app.use('/Book', bookController)
app.use('/Word', wordController)

app.get("/", (req,res)=>{
    res.send(" this works ")
})

// basic error handling for bad product indexes
app.get('/error', (req,res)=>{
    res.status(500).send('something went wrong...')
})

// error handling using the next argument + middleware
// next(Error('message'))
app.use((error, req,res,next)=>{
    console.error("inside middleware")
    if(error){
        return res.status(404).send(error.message)
    }
    next()
})

// wild card / 404 if not using error handling middleware 
app.get('*', (req,res,next)=>{
    if(req.error){
        res.status(404).send(`Error: ${req.error.message}`)
    }else {
        res.redirect('/error/')
    }
})

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));