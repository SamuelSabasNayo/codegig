import express from "express";
import exphbs from "express-handlebars";
import bodyParser from "body-parser";
import path from "path";

// Database
import { db } from "./config/database";

// Gigs routes
import gigsRoutes from "./routes/gigs";

const app = express();

// Test DB
db.authenticate()
    .then(() => console.log(`Database connected...`))
    .catch(err => console.log(`Error: ${err}`));
    
// db.close();

// routes
app.get('/', (req, res) => res.status(200).send('INDEX'));
app.use('/gigs', gigsRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on PORT ${PORT}`));