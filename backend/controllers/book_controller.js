const express = require('express')

const router = express.Router()

// Model import - goes here 

router.use(express.json())

// const db = require('../models/Book')
//Static route 
router.get('/meh', (req,res)=>{
    res.json('my understanding is meh')
})
router.get('/awesome', (req, res, next) => {
        res.json({message: 'Products are awesome!'})
})

module.exports = router