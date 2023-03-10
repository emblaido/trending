// initializing 
require("dotenv").config();
require('./config/db.connection')

const {PORT, MONGODB_URI} = process.env;

const express = require("express")
const app = express()


// app.get(['/', '/home', '/book', '/fashion', '/word'], (req,res)=>{
//     res.send("home")
// })

// app dependencies 
const cors = require('cors')
const morgan = require ('morgan')

//controller import 
const bookController = require('./controllers/book_controller')
const fashionController = require('./controllers/fashion_controller')
const wordController = require('./controllers/word_controller')
const homeController = require('./controllers/home_controller')
// console.log(bookController)

//express / app middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// //Cors helper function 
app.use(cors())

// //Morgan 
app.use(morgan('dev'))

app.use('/fashion', fashionController)
app.use('/book', bookController)
app.use('/word', wordController)
app.use('/home', homeController)

app.get('/', (req,res) =>{
    res.redirect('/home')
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

app.listen(process.env.PORT || 4000, () => console.log(`listening on PORT ${PORT}`));