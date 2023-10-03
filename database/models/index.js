'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
//const process = require('process');
//const basename = path.basename(__filename);
//const env = process.env.NODE_ENV || 'development';
//const config = require(__dirname + '/../config/config.js')[env];
const db = {};


  const sequelize = new Sequelize('luminis', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
  });

// lee todos los archivos de modelos en la carpeta actual y los integra al objeto db
fs.readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== 'index.js') && (file.slice(-3) === '.js');
  })  
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

  // define las relaciones entre modelos si es necesario
  //ejemplo: db.usuario.hasMany(db.Pedido);

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// nueva instancia
db.sequelize = sequelize;
// requiere sequelize
db.Sequelize = Sequelize;

module.exports = db;
