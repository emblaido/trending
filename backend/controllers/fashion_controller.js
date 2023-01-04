const { json } = require('express')
const express = require('express')
const router = express.Router()
router.use(express.json())
// const {Fashion} = require('../models')
const db = require('../models')

router.get('/', (req, res, next) => {
    res.json({message: 'fashionistas in the clubbb'})
})


router.get('/fashion', async (req,res)=>{ 
    try {
        const fashion = await db.Fashion.find({})
        return res.status(200).json(fashion)
    } catch(error) {
        console.error(error)
        return next(error)
    }
})

router.post('/fashion', async(req, res)=>{
    console.log("hitting")
    
    try{
        const newFashion = await db.Fashion.create(req.body)
        res.status(201).json(newFashion)
    }catch(err){
        res.status(400).json ({error:err.message})
    }
})

module.exports = router
