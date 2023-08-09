const path = require('path');
const dataBaseU = require('../dataBase/usuarios.json');
const arrLibros = require('../dataBase/libros.json');


const mainController = {
    home: (req,res)=>{        
        
        res.render('home', {libros: arrLibros});   
    },   
    register: (req,res)=>{
        res.render('register');    
    },   
    login: (req,res)=>{
        res.render('login');    
    },   
}

module.exports = mainController;