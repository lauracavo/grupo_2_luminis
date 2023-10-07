const {Sequelize, DataTypes} = require ('sequelize');
// const sequelize = new Sequelize
 


    //Aca definimos el modelo
    module.exports = (sequelize, DataTypes) => {
        const Cart = sequelize.define('Cart', {
    // define los campos del modelo y tipos de datos
    idProduct: {
        type: DataTypes.INTEGER,        
        autoIncrement: true,
        primaryKey: true
    },
    date:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    idUser:{
        type:DataTypes.STRING,
        allowNull: true,
        references: {
            model:"users",  // Nombre de la tabla a la que se hace referencia
            key: "idUser" // Nombre de la clave primaria en la tabla User
      
    }},
    timestamps: false,
   
    tableName: 'carts'
   })
    return Cart
    }