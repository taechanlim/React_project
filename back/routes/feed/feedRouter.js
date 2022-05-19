const express = require('express')
const router = express.Router()
const feedController = require('./feedController.js')


router.get('/list',feedController.list)
router.post('/delete',feedController.delete)
router.post('/write',feedController.write)






module.exports = router