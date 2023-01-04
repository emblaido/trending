const express = require('express')

const router = express.Router()

// Model import - goes here 

router.use(express.json())


//Static route 

router.get('/word', (req, res, next) => {
        res.json({message: 'whats the word bird?'})
})

module.exports = router