const {Sequelize, DataTypes} = require ('sequelize');
// const sequelize = new Sequelize
 


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
    imgUrl:{
        type:DataTypes.STRING,
        allowNull: true
    },
    idProduct: DataTypes.INTEGER,
}
    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false,
        tableName: 'imagesproducts'
        }
    
        const imageproduct = sequelize.define(alias, cols, config)
       //Aquí debes realizar lo necesario para crear las relaciones con los otros modelos (Genre - Actor)
       imageproduct.associate = ( models ) =>{
        imageproduct.belongsTo( models.products, {
            as: "products",
            foreignKey: "idProduct"
        } );
        //    imageproduct.belongsToMany(  models.products, {
        //       as: "",
        //       through: "actor_movie",
        //         foreignKey: "movie_id",
        //      otherKey: "actor_id"
        //     })
       }
    return imageproduct
    }