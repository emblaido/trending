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

//index route 
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

//Show Route 
router.get('/:id', async(req,res)=>{
    try{
        const findBooks = await Book.findById(req.params.id)
        res.status(201).json(findBooks)
    }catch(err){
        res.status(400).json({error: err.message})
    }
})

//Post Route 
router.post('/', async(req, res)=>{
    try{
        const newBook = await Book.create(req.body)
        res.status(201).json(newBook)
    }catch(err){
        res.status(400).json ({error:err.message})
    }
})

//Update 
// router.put('/:id', async(req,res)=>{
//     try{
//         const updatedBook = await Book.findByIdAndUpdate(req.params.id)
//         res.status(201).json(updatedBook)
//     }catch(err){
//         res.status(400).json ({error: err.message})
//     }
// })

// Delet 
router.delete('/:id', async(req,res)=>{
    try{
        const deletedBook = await Book.findByIdAndDelete(req.params.id)
        res.status(201).json(deletedBook)
    }catch(err){
        res.status(400).json({error: err.message})
    }
})

module.exports = router