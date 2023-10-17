const multer = require('multer');
const path = require ('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const pathFolder = path.join( __dirname,'..', '..', 'public', 'img','books');
        cb(null, pathFolder)
    },
    filename: function (req, file, cb) {
        const newName = 'product-' + Date.now() + path.extname(file.originalname);
        cb(null, newName)
    }
})

const upload = multer({ storage: storage });

module.exports = upload;