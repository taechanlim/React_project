const express = require('express')
const router = express.Router()
const commentController = require('./commentController.js')


router.post('/list',commentController.list)
router.post('/write',commentController.write)
router.post('/update',commentController.update)
router.post('/delete',commentController.delete)

module.exports = router