 const {Sequelize, DataTypes} = require ('sequelize');
 
// const sequelize = new Sequelize
 
    //Aca definimos el modelo
    module.exports = (sequelize, DataTypes) => {
        let alias = 'Product'; // esto debería estar en singular
        let cols = {
    // define los campos del modelo y tipos de datos
    idProduct: {
        type: DataTypes.INTEGER,   
        allowNull:false,     
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
        allowNull: false
    },
    characteristic:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    purchasePrice:{
        type:DataTypes.DOUBLE,
        allowNull:false
    },
    salePrice:{
        type : DataTypes.DOUBLE,
        allowNull : false
    },
    stock:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    idCategory: DataTypes.INTEGER, 
   
}
let config = {
    timestamps: false,
    // createdAt: 'created_at',
    // updatedAt: 'updated_at',
    // deletedAt: false,
    tableName: 'products'
    }

    const products = sequelize.define(alias, cols, config)
   //Aquí debes realizar lo necesario para crear las relaciones con los otros modelos (Genre - Actor)
   products.associate = ( models ) =>{
       products.hasOne( models.Categorie, {
           as: "Categorie",
           foreignKey: "idCategory"
       } );
    
       products.belongsTo(models.Categorie, {
            foreignKey: 'idCategory',
             as: 'category'
                });
    //    products.belongsTo(models.Order, {
    //     foreignKey: 'idOrder', 
    //     as: 'Order'
    //    })
   }
    return products
    }
  
    

   
    
   


