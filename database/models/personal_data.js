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
    tableName: 'personal_data'
    }

    const userDetail = sequelize.define(alias, cols, config)
   //Aquí debes realizar lo necesario para crear las relaciones con los otros modelos (Genre - Actor)
   userDetail.associate = ( models ) =>{
       userDetail.hasOne( models.User, {
           as: "userDetail",
           foreignKey: "idUser"
       } );
    
    /* userDetail.hasMany(models.ImageProduct, {
         as: 'imagesproduct', 
         foreignKey: 'idProduct' });  */   
   }
    return userDetail
    }

