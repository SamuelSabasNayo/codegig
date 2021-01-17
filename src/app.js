import express from 'express';
import dotenv from 'dotenv';
import bodyParser from "body-parser";
import cors from "cors";
import Sequelize from "sequelize";
import config from "./config/config";
import usersRoutes from "./routes/usersRoutes";
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const app = express();

dotenv.config();

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Code Gig API',
      description: 'Code Gig API Information',
      contact: {
        name: 'SamuelNayo'
      },
      servers: ['http://localhost:5000']
    }
  },
  apis: ['./src/routes/*.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Database url
const DEV_DB_url = config.development.url;

//Connecting to database
const sequelize = new Sequelize(DEV_DB_url);

// Test DB
sequelize.authenticate()
  .then(() => console.log(`Database connected...`))
  .catch(err => console.log(`Error: ${err}`));

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: 'application/json' }));
app.use(cors());


// routes
const basePath = '/api/v1'
app.get(`${basePath}`, (req, res) => res.status(200).json({ message: 'Welcome on CodeGig' }));
app.use(`${basePath}/users`, usersRoutes);
app.get('**', (req, res) => { res.status(400).send({ status: 404, message: `404 Page Not Found on CodeGig!` }); });


export default app;
