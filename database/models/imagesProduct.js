const {Sequelize, DataTypes} = require ('sequelize');
// const sequelize = new Sequelize
 


    //Aca definimos el modelo
    module.exports = (sequelize, DataTypes) => {
        const ImagesProduct = sequelize.define('ImagesProduct', {
    // define los campos del modelo y tipos de datos
    idImgProduct: {
        type: DataTypes.INTEGER,        
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    imgUrl:{
        type:DataTypes.STRING,
        allowNull: true
    },
    idProduct:{
        type:DataTypes.STRING,
        allowNull: true,
        references: {
          model: 'products', // Nombre de la tabla a la que se hace referencia
          key: 'idProduct' // Nombre de la clave primaria en la tabla Product
    }
    }},
   {
    timestamps: false,
   
    tableName: 'imagesproducts'
   })
    return ImagesProduct
    }