const DbConfig = require('../config/database');
const { Sequelize } = require('sequelize');


const mysqlDb = new Sequelize(
    DbConfig.database,
    DbConfig.admin,
    DbConfig.password, {
        host: DbConfig.host,
        dialect: DbConfig.dialect,
        logging : false
    }
);

let User = mysqlDb.define('users', {
        ID:{
            type: Sequelize.INTEGER.UNSIGNED,
            primaryKey : true,
            autoIncrement: true
        },

        Name :{
            type: Sequelize.STRING
        },

        UserName :{
            type: Sequelize.STRING,
        },

        Password : {
            type: Sequelize.STRING,
        },

        Email: {
            type : Sequelize.STRING,
        }

});

let UserProfile = mysqlDb.define('userProfile', {
    ID:{
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey : true,
    },

    LastName : {
        type: Sequelize.STRING,
        allowNull : true
    },

    Phone : {
        type: Sequelize.STRING(10),
        allowNull: true
    },

    Address : {
        type: Sequelize.STRING,
        allowNull: true
    }

});



/**
 * create table if not exist
 */
mysqlDb.sync({force:true});

module.exports = {User, UserProfile};
