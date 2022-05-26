const path = require("path");
const express = require("express");
const router = express.Router()
const imgController = require('./imgController.js')
const multer = require("multer");
const PORT = 4001;

const storage = multer.diskStorage({
  destination: "./../front/static/savedImg",
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

router.post('/img',upload.single("img"),imgController.img)
router.post('/userimg',imgController.userimg)
router.post('/userimgupdate',upload.single("img"),imgController.userimgupdate)

module.exports = router