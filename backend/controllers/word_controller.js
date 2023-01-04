const express = require('express')

const router = express.Router()

// Model import - goes here 

router.use(express.json())
const db = require('../models')


//Static route 

// router.get('/word', (req, res, next) => {
//         res.json({message: 'whats the word bird?'})
// })

router.get('/', async (req,res)=>{ 
        try {
            const word = await db.Word.find({})
            return res.status(200).json(word)
        } catch(error) {
            console.error(error)
            return next(error)
        }
    })

module.exports = router