const { json } = require('express')
const express = require('express')
const router = express.Router()
router.use(express.json())
const {Word} = require('../models')
//const db = require('../models')

// router.get('/', (req, res, next) => {
//     res.json({message: "word bird"})
// })


router.get('/', async (req,res)=>{ 
    try {
        const Words = await Word.find({})
        return res.status(200).json(Words)
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


router.put('/:id', async(req,res, next)=>{
    try{
        const updatedWord = await Word.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(201).json(updatedWord)
    }catch(err){
        res.status(400).json ({error: err.message})
    }
})


router.delete('/:id', async(req,res)=>{
    try{
        const deletedWord = await Word.findByIdAndDelete(req.params.id)
        res.status(201).json(deletedWord)
    }catch(err){
        res.status(400).json({error: err.message})
    }
})

module.exports = router
