const express = require('express')

const router = express.Router()

// Model import - goes here 

router.use(express.json())

// const db = require('../models/Book')
//Static route 
// router.get('/meh', (req,res)=>{
//     res.json('my understanding is meh')
// })
// router.get('/awesome', (req, res, next) => {
//         res.json({message: 'Products are awesome!'})
// })

const db = require('../models')

router.get('/', async (req,res)=>{ 
    try {
        const book = await db.Book.find({})
        return res.status(200).json(book)
    } catch(error) {
        console.error(error)
        return next(error)
    }
})


module.exports = router