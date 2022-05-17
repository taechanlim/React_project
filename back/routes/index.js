const express = require('express')
const { Auth } = require('../middlewares/auth')
const userRouter = require('./user/userRouter.js');

const router = express.Router();

router.use('/api/user',userRouter);


router.use(Auth)
module.exports = router;