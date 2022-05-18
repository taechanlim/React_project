const express = require('express')
const router = express.Router()
const feedController = require('./feedController.js')


router.post('/list',feedController.list)







module.exports = router