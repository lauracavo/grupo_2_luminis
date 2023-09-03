const multer = require('multer');

const storage = multer.diskStorage({
    
    destination: function (req, file, cb) {
        const rutaImg= path.join(__dirname, "..", "public", "img", "usersProfile_images");
        cb (null, rutaImg)
    },
    filename: function (req, file, cb) {
        const filename="profile_image"+Date.now()+path.extname(file.originalname);
        cb(null, filename)
    }
});

const upload = multer({ storage: storage });

module.exports = upload;