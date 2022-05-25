const path = require("path");
// const express = require("express");
// const app = express();
const router = express.Router()
const imgController = require('./imgController.js')
const multer = require("multer");
const PORT = 4001;

router.post('/img',imgController.img)

const storage = multer.diskStorage({
  destination: "./public/img/",
  filename: function(req, file, cb) {
    cb(null, "imgfile" + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 }
  });
  
  router.post("/upload", upload.single("img"), function(req, res, next) {
    res.send({
      fileName: req.file.filename
    });
    
  });