 const {Sequelize, DataTypes} = require ('sequelize');
// const sequelize = new Sequelize
 


    //Aca definimos el modelo
    module.exports = (sequelize, DataTypes) => {
        const Product = sequelize.define('Product', {
    // define los campos del modelo y tipos de datos
    idProduct: {
        type: DataTypes.INTEGER,        
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    brand:{
        type:DataTypes.STRING,
        allowNull: true
    },
    editorial:{
      type:DataTypes.STRING,
      allowNull: true
    },
    author:{
        type:DataTypes.STRING,
        allowNull: true
    },
    detail:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    purchasePrice:{
        type:DataTypes.DOUBLE,
        allowNull: false
    },
    salePrice:{
        type : DataTypes.DOUBLE,
        allowNull : false
    },
    stock:{
        type:DataTypes.INTEGER,
        allowNull: false
    }},
   {
    timestamps: false,
   
    tableName: 'products'
   })
    return Product
    }
  
    

   
    
   


