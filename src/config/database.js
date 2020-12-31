import config from "./config";
import Sequelize from "sequelize";

const { DB_NAME, DB_USERNAME, DB_PASSWORD } = config;

exports.db = new Sequelize(`${DB_NAME}`, `${DB_USERNAME}`, `${DB_PASSWORD}`, {
    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases: false,
    
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});