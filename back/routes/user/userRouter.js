const express = require('express')
const router = express.Router()
const userController = require('./userController.js')
const path = require("path");
// const { upload } = require('../../utils/uploads_user.js')

router.post('/register',userController.register)
router.post('/login',userController.login)
router.post('/info',userController.info)
router.post('/update',userController.update)
router.post('/delete',userController.delete)
router.post('/wallet',userController.wallet)


module.exports = router