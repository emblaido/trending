const { json } = require('express')
const express = require('express')
const router = express.Router()
router.use(express.json())
const {Book} = require('../models')
//const db = require('../models')

// router.get('/', (req, res, next) => {
//     res.json({message: "bookworm"})
// })


// router.get('/', async (req,res)=>{ 
//     try {
//         const Book = await Book.find({})
//         return res.status(200).json(Home)
//     } catch(error) {
//         console.error(error)
//         return next(error)
//     }
// })

router.get('/', async (req,res)=>{ 
    try {
        const books = await Book.find({})
        console.log(books)
        return res.status(200).json(books)
    } catch(error) {
        console.error(error)
        return next(error)
    }
})


router.post('/', async(req, res)=>{
    console.log("buk")
    
    try{
        const newBook = await Book.create(req.body)
        res.status(201).json(newBook)
    }catch(err){
        res.status(400).json ({error:err.message})
    }
})

module.exports = router