const express = require ('express');
const route = express.Router();
const mainController = require ('../controllers/mainController')

route.get('/', mainController.home);



module.exports=route;