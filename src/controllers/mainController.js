const path = require('path');

const mainController = {
    home: (req,res)=>{
        res.sendFile(path.resolve(__dirname, ('../views/home.ejs')))
    
    },   
}

module.exports = mainController;