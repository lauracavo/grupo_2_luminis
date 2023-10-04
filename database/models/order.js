const {Sequelize, DataTypes} = require ('sequelize');
// const sequelize = new Sequelize
 


    //Aca definimos el modelo
    module.exports = (sequelize, DataTypes) => {
        const Order = sequelize.define('Order', {
    // define los campos del modelo y tipos de datos
    idOrder: {
        type: DataTypes.INTEGER,        
        autoIncrement: true,
        primaryKey: true
    },
    price:{
        type:DataTypes.DOUBLE,
        allowNull:false,
    },
    amount:{
        type:DataTypes.STRING,
        allowNull: true
    },
    idProduct:{
      type:DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'products', // Nombre de la tabla a la que se hace referencia
        key: 'idProduct' // Nombre de la clave primaria en la tabla Product
    },
    idCart:{
        type:DataTypes.STRING,
        allowNull: true,
        references: {
            model:"carts",  // Nombre de la tabla a la que se hace referencia
            key: "idCart" // Nombre de la clave primaria en la tabla Cart
        }
        
     }},
   
    timestamps: false,
   
    tableName: 'orders'
   })

   
    return Order
    }