const {Sequelize, DataTypes} = require ('sequelize')
// const sequelize = new Sequelize
 


    //Aca definimos el modelo
    module.exports = (sequelize, DataTypes) => {
        let alias = 'Categorie'; // esto debería estar en singular
        let cols = {
    // define los campos del modelo y tipos de datos
    idCategory: {
        type: DataTypes.INTEGER,        
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    }
}
    
    let config = {
    timestamps: false,
   
    tableName: 'categories'
   }
   const Categorie = sequelize.define(alias, cols, config)
   Categorie.associate = (models) => {
   Categorie.hasMany(models.Product, {
        foreignKey: 'idCategory',       
        as: 'products'
    })
   }
 
    return Categorie;
}