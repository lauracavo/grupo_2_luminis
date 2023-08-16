const path = require('path');
const dataLibros = require('../dataBase/libros.json');


const mainController = {
    home: (req,res)=>{        
        
    },
 
    register: (req,res)=>{
        res.render('register');    
    },   
    login: (req,res)=>{
        res.render('login');    
    },   
    admin: (req,res) =>{
        res.render('administrador');
    },
}

module.exports = mainController;