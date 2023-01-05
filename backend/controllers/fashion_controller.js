const { json } = require('express')
const express = require('express')
const router = express.Router()
router.use(express.json())
const {Fashion} = require('../models')
//const db = require('../models')

//index route
router.get('/', async (req,res)=>{ 
    try {
        const fashionista = await Fashion.find({})
        return res.status(200).json(fashionista)
    } catch(error) {
        console.error(error)
        return next(error)
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