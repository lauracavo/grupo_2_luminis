const express = require("express");
const route = express.Router();
const mainController = require("../controllers/mainController");
const multer = require('multer');

const storage = multer.diskStorage({
    
    destination: function (req, file, cb) {
        const rutaImg= path.join(__dirname, "..", "public", "images");
        cb (null, rutaImg)
    },
    filename: function (req, file, cb) {
        const filename="image-"+Date.now()+path.extname(file.originalname);
        cb(null, filename)
    }
});

const upload =multer({ storage: storage });


route.get("/", mainController.home);

module.exports = {route, upload};
