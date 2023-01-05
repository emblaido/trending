const express = require('express')

const router = express.Router()

// Model import - goes here

router.use(express.json())


//Static route 

router.get('/awesome', (req, res, next) => {
        res.json({message: 'Products are awesome!'})
})

module.exports = router