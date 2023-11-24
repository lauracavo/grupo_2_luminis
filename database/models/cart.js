const {Sequelize, DataTypes} = require ('sequelize');
// const sequelize = new Sequelize
 


    //Aca definimos el modelo
    module.exports = (sequelize, DataTypes) => {
        let alias = 'Cart'; // esto debería estar en singular
        let cols = {
    // define los campos del modelo y tipos de datos
    // define los campos del modelo y tipos de datos
    idCart: {
        type: DataTypes.INTEGER,        
        autoIncrement: true,
        primaryKey: true
    },
    date:{
        type:DataTypes.DATE,
        allowNull:false,
    },
 
    idUser: DataTypes.INTEGER, 
 }
    let config = {
    timestamps: false,
   
    tableName: 'carts'
   }
   const carts = sequelize.define(alias, cols, config)
   //Aquí debes realizar lo necesario para crear las relaciones con los otros modelos (Genre - Actor)
   carts.associate = ( models ) =>{      
    
       carts.belongsTo(models.User, {
            foreignKey: 'idUser',
             as: 'User'
        });
        carts.belongsTo(models.Order, {
            foreignKey: 'idOrder',
             as: 'Order'
        });
   }
    return carts
    }
  
    

   