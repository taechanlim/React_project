const express = require('express')
const router = express.Router()
const feedController = require('./feedController.js')


router.post('/list',feedController.list)
router.post('/view',feedController.view)






module.exports = router