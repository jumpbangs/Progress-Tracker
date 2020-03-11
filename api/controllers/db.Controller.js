const DbConfig = require("../config/database");
const { Sequelize } = require("sequelize");

const mysqlDb = new Sequelize(
  DbConfig.database,
  DbConfig.admin,
  DbConfig.password,
  {
    host: DbConfig.host,
    dialect: DbConfig.dialect,
    logging: false
  }
);

let User = mysqlDb.define("users", {
  Id: {
    type: Sequelize.INTEGER.UNSIGNED,
    allowNull: false,
    autoIncrement: true,

    primaryKey: true,
    type:Sequelize.INTEGER
  },
  Name: {
    type: Sequelize.STRING
  },

  UserName: {
    type: Sequelize.STRING
  },

  Password: {
    type: Sequelize.STRING
  },

  Email: {
    type: Sequelize.STRING
  }
});

let UserProfile = mysqlDb.define("userProfile", {
  
  LastName: {
    type: Sequelize.STRING,
    allowNull: true
  },

  Phone: {
    type: Sequelize.STRING(10),
    allowNull: true
  },

  Address: {
    type: Sequelize.STRING,
    allowNull: true
  },

  State : {
    type: Sequelize.STRING,
    allowNull: true
  }
});

UserProfile.belongsTo(User);

let UserToken = mysqlDb.define("userToken", {
  userIdToken:{
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    primaryKey:true
  },
  UserName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  GeneratedUserToken: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

User.hasOne(UserProfile, {foreignKey:'userId'});

/**
 * create table if not exist
 */
mysqlDb.sync({ force: false });

module.exports = { User, UserProfile, UserToken };
