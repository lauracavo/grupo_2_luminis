const {Sequelize, DataTypes} = require ('sequelize');
 
// const sequelize = new Sequelize
 


    //Aca definimos el modelo
    module.exports = (sequelize, DataTypes) => {
        let alias = 'Personal'; // esto debería estar en singular
        let cols = {
    // define los campos del modelo y tipos de datos
    idPersonalData: {
        type: DataTypes.INTEGER,   
        allowNull:false,     
        autoIncrement: true,
        primaryKey: true
    },
    DNI:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    adress:{
        type:DataTypes.STRING,
        allowNull: true
    },
    city:{
      type:DataTypes.STRING,
      allowNull: true
    },
    province:{
        type:DataTypes.STRING,
        allowNull: true
    },
    cp:{
        type:DataTypes.STRING,
        allowNull: false
    },
    cellphone:{
        type:DataTypes.STRING,
        allowNull:false
    },
    idUser:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    
   
}
let config = {
    timestamps: false,
    // createdAt: 'created_at',
    // updatedAt: 'updated_at',
    // deletedAt: false,
    tableName: 'personal_datas'
    }

    const products = sequelize.define(alias, cols, config)
   //Aquí debes realizar lo necesario para crear las relaciones con los otros modelos (Genre - Actor)
   products.associate = ( models ) =>{
       products.hasOne( models.Categorie, {
           as: "Categorie",
           foreignKey: "idCategory"
       } );
    
    products.hasMany(models.imagesproduct, {
         as: 'imagesproduct', 
         foreignKey: 'idProduct' });    
   }
    return products
    }