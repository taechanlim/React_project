const express = require('express')
const { Auth } = require('../middlewares/auth')
const userRouter = require('./user/userRouter.js');
const feedRouter = require('./feed/feedRouter.js');

const router = express.Router();

router.use('/api/user',userRouter);
router.use('/api/feed',feedRouter);


router.use(Auth)

module.exports = router;