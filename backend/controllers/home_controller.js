const { json } = require('express')
const express = require('express')
const router = express.Router()
router.use(express.json())
const {Home} = require('../models')
const db = require('../models')

router.get('/', (req, res, next) => {
    res.json({message: "you're HOME"})
})


router.get('/home', async (req,res)=>{ 
    try {
        const fashion = await db.Home.find({})
        return res.status(200).json(Home)
    } catch(error) {
        console.error(error)
        return next(error)
    }
})

// router.post('/home', async(req, res)=>{
//     // console.log("You're HOME")
    
//     try{
//         const newHome = await db.Home.create(req.body)
//         res.status(201).json(newHome)
//     }catch(err){
//         res.status(400).json ({error:err.message})
//     }
// })

module.exports = router
