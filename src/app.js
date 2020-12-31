import express from "express";
import exphbs from "express-handlebars";
import bodyParser from "body-parser";
import path from "path";
import config from "./config/config";

const app = express();

const { DB_NAME, DB_USERNAME, DB_PASSWORD } = config;

import Sequelize from "sequelize";
const db = new Sequelize(`${DB_NAME}`, `${DB_USERNAME}`, `${DB_PASSWORD}`, {
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

// Test DB
db.authenticate()
    .then(() => console.log(`Database connected...`))
    .catch(err => console.log(`Error: ${err}`));

app.get('/', (req, res) => res.send('INDEX'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on PORT ${PORT}`));