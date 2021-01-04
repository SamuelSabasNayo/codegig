import express from 'express';
import dotenv from 'dotenv';
import Sequelize from "sequelize";
import path from 'path';
// import config from "./database/config/config";
import usersRoutes from "./routes/usersRoutes";
import user from './database/models/user';

const app = express();

dotenv.config();

//Connecting to database
const db = new Sequelize(`dev_db`, `postgres`, `samuel123`, {
// exports.db = new Sequelize(`${DB_NAME}`, `${DB_USERNAME}`, `${DB_PASSWORD}`, {
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

// routes
app.get('/', (req, res) => res.status(200).send('INDEX'));
app.use('/users', usersRoutes);

export default app;