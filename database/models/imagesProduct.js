const {Sequelize, DataTypes} = require ('sequelize');
   //Aca definimos el modelo
    module.exports = (sequelize, DataTypes) => {
        let alias = 'imageproduct'; // esto debería estar en singular
        let cols = {
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
   
    idProduct: DataTypes.INTEGER,
}
    let config = {
        timestamps: false,       
        tableName: 'imagesproducts'
        }
    
        const imageproduct = sequelize.define(alias, cols, config)
       //Aquí debes realizar lo necesario para crear las relaciones con los otros modelos (Genre - Actor)
       imageproduct.associate = ( models ) =>{
        imageproduct.hasMany( models.products, {
            as: "products",
            foreignKey: "idProduct"
        } );
      
       }
    return imageproduct
    }