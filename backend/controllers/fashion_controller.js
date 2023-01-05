const { json } = require('express')
const express = require('express')
const router = express.Router()
router.use(express.json())
const {Fashion} = require('../models')
//const db = require('../models')

//Index route
router.get('/', async (req,res)=>{ 
    try {
        const fashionista = await Fashion.find({})
        return res.status(200).json(fashionista)
    } catch(error) {
        console.error(error)
        return next(error)
    }
})

//Show Route
router.get('/:id', async(req,res)=>{
    try{
        const findFashion = await Book.findById(req.params.id)
        res.status(201).json(findFashion)
    }catch(err){
        res.status(400).json({error: err.message})
    }
})




router.post('/', async(req, res)=>{
    console.log("posting a fashion trend")
    
    try{
        const newFashion = await Fashion.create(req.body)
        res.status(201).json(newFashion)
    }catch(err){
        res.status(400).json ({error:err.message})
    }
})

module.exports = router