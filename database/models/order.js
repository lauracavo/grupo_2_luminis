const {Sequelize, DataTypes} = require ('sequelize');
// const sequelize = new Sequelize
 


    //Aca definimos el modelo
    module.exports = (sequelize, DataTypes) => {
        let alias = 'Order'; // esto debería estar en singular
        let cols = {
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
        type:DataTypes.INTEGER,
        allowNull: true
    },
    idProduct: DataTypes.INTEGER, 
    idCart: DataTypes.INTEGER
        
    }
   let config = { 
    timestamps: false,
   
    tableName: 'orders'
   }
   const orders = sequelize.define(alias, cols, config)
   //Aquí debes realizar lo necesario para crear las relaciones con los otros modelos (Genre - Actor)
        orders.associate = ( models ) =>{      
    
       orders.hasMany(models.Product, {
            foreignKey: 'idProduct',
             as: 'Product'
        });
        orders.hasMany(models.Cart, {
            foreignKey: 'idCart',
             as: 'Cart'
        });
          
   }
    return orders
    }