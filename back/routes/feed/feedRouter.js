const path = require("path");
const express = require('express')
const router = express.Router()
const feedController = require('./feedController.js')
const multer = require("multer");
const PORT = 4001;

const storage = multer.diskStorage({
    destination: "./../front/static/feedImg",
    filename: function(req, file, done) {
      const ext = path.extname(file.originalname)
      const filename = path.basename(file.originalname,ext) + Date.now() + ext
      done(null,filename)
    }
  });
  
  const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 }
  });


router.get('/list',feedController.list)
router.post('/list2',feedController.list2)
router.post('/delete',feedController.delete)
router.post('/write',upload.single("img"),feedController.write)
router.post('/update',feedController.update)






module.exports = router