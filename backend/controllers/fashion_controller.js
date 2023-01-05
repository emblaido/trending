const { json } = require('express')
const express = require('express')
const router = express.Router()
router.use(express.json())
const {Fashion} = require('../models')
//const db = require('../models')

// router.get('/', (req, res, next) => {
//     res.json({message: "you're a fashionista"})
// })


router.get('/', async (req,res)=>{ 
    try {
        const newFashion = Fashion.find({})
        return res.status(200).json(Home)
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