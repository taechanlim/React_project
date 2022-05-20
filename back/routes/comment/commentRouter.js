const express = require('express')
const router = express.Router()
const commentController = require('./commentController.js')


router.post('/list',commentController.list)

module.exports = router