import express from 'express';
import dotenv from 'dotenv';
import Sequelize from "sequelize";
import config from "./config/config";
import usersRoutes from "./routes/usersRoutes";

const app = express();

dotenv.config();

// Database url
const DEV_DB_url = config.development.url;


//Connecting to database
const sequelize = new Sequelize(DEV_DB_url);

// Test DB
sequelize.authenticate()
    .then(() => console.log(`Database connected...`))
    .catch(err => console.log(`Error: ${err}`));

// routes
app.get('/', (req, res) => res.status(200).send('INDEX'));
app.use('/users', usersRoutes);
app.get('**', (req, res) => { res.status(400).send({ status: 400, message: `Welcome to Postgres & Sequelize!` }); });


export default app;