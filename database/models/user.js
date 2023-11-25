const { Sequelize, DataTypes } = require('sequelize')
// const sequelize = new Sequelize



//Aca definimos el modelo
module.exports = (sequelize, DataTypes) => {
    let alias = 'User'; // esto debería estar en singular
    let cols = {
        // define los campos del modelo y tipos de datos
        idUser: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        fullname: {
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
    }

    let config = {
        timestamps: false,

        tableName: 'users'
    }
    const User = sequelize.define(alias, cols, config)
    User.associate = (models) => {
        User.hasMany(models.Personal, {
            foreignKey: 'idUser',
            as: 'userDetail'
        });
        User.hasMany(models.Cart , {
            foreignKey: 'idUser',
            as: 'Cart'
        })
    }

    return User;
}

