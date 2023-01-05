const { json } = require('express')
const express = require('express')
const router = express.Router()
router.use(express.json())
const {Home} = require('../models')
//const db = require('../models')

//Index route
router.get('/', async (req,res)=>{ 
    try {
        const Homes = await Home.find({})
        return res.status(200).json(Homes)
    } catch(error) {
        console.error(error)
        return next(error)
    }
})

//show 
router.get('/:id', async(req, res)=>{
    try{
        const findHome = await Home.findById(req.params.id)
        res.status(201).json(findHome)
    }catch (err){
        res.status(400).json({error: err.message})
    }
})

//post
router.post('/', async(req, res)=>{
    try{
        const newHome = await Home.create(req.body)
        res.status(201).json(newHome)
    }catch(err){
        res.status(400).json ({error:err.message})
    }
})

//update 
router.put('/:id', async(req,res, next)=>{
    try{
        const updatedHome= await Home.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(201).json(updatedHome)
    }catch(err){
        res.status(400).json ({error: err.message})
    }
})


module.exports = router
