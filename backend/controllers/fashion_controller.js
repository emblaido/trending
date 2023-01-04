const { json } = require('express')
const express = require('express')
const router = express.Router()
router.use(express.json())

router.get('/fashion', (req, res, next) => {
    res.json({message: 'fahsionistas in the clubbb'})
})

// const {Fashion} = require('../models/Fashion')
// const db = require('../models/Fashion')

module.exports = router
