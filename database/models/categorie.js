const {Sequelize, DataTypes} = require ('sequelize');
// const sequelize = new Sequelize
 


    //Aca definimos el modelo
    module.exports = (sequelize, DataTypes) => {
        const Categorie = sequelize.define('Categorie', {
    // define los campos del modelo y tipos de datos
    idCategory: {
        type: DataTypes.INTEGER,        
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    }},
   {
    timestamps: false,
   
    tableName: 'categories'
   })
    return Categorie
    }