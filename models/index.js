const dbConfig = require("../configuration/db.config.js");
const Sequelize = require("sequelize");


const sequelize = new Sequelize(dbConfig.DatabaseConnection.dbCon.DB, dbConfig.DatabaseConnection.dbCon.USER, dbConfig.DatabaseConnection.dbCon.PASSWORD, {
    host: dbConfig.DatabaseConnection.dbCon.HOST,
    dialect: dbConfig.DatabaseConnection.dbCon.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.DatabaseConnection.dbCon.max,
        min: dbConfig.DatabaseConnection.dbCon.min,
        acquire: dbConfig.DatabaseConnection.dbCon.acquire,
        idle: dbConfig.DatabaseConnection.dbCon.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);

module.exports = db;