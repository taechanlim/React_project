const express = require('express')
const router = express.Router()
const feedController = require('./feedController.js')


router.get('/list',feedController.list)
// router.post('/view',feedController.view)
router.post('/delete',feedController.delete)






module.exports = router