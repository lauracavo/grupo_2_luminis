const {Sequelize, DataTypes} = require("sequelize");
const sequelize = new Sequelize
const product = sequelize.define("product", {
    //Aca definimos el modelo
    idProduct:{
        type:DataTypes.INTEGER,
        allowNull: false,
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
    },
    tableName: 'products'
    
})
