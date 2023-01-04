const { json } = require('express')
const express = require('express')
const router = express.Router()
router.use(express.json())
const {Fashion} = require('../models')
const db = require('../models')

// router.get('/fashion', (req, res, next) => {
//     res.json({message: 'fashionistas in the clubbb'})
// })

router.get('/', async (req,res)=>{ 
    try {
        const fashion = await db.Fashion.find({})
        return res.status(200).json(fashion)
    } catch(error) {
        console.error(error)
        return next(error)
    }
})


module.exports = router
