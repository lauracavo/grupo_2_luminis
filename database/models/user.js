const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = new Sequelize

//Aca definimos el modelo
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        // define los campos del modelo y tipos de datos
        idUser: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        fullName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        rol: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
        {

            timestamps: false,

            tableName: 'users'
        })
    return User
}