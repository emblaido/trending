const { json } = require('express')
const express = require('express')
const router = express.Router()
router.use(express.json())
const {Word} = require('../models')
//const db = require('../models')

router.get('/', (req, res, next) => {
    res.json({message: "word bird"})
})


router.get('/', async (req,res)=>{ 
    try {
        const Word = await Word.find({})
        return res.status(200).json(Home)
    } catch(error) {
        console.error(error)
        return next(error)
    }
})

router.post('/', async(req, res)=>{
    console.log("word bird")
    
    try{
        const newWord = await Word.create(req.body)
        res.status(201).json(newWord)
    }catch(err){
        res.status(400).json ({error:err.message})
    }
})

module.exports = router