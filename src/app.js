import { Client } from 'pg';

const client = new Client({
    user: 'postgres',
    password: 'samuel123',
    host: 'localhost',
    port : 5432,
    database: 'test'
}); 

client.connect()
    .then(() => console.log('Connected successfully...'))
    .then(() => client.query("select * from person where country_of_birth = $1", ["United States"]))
    .then(results => console.table(results.rows))
    .catch(e => console.log('Error' + e))
    .finally(() => client.end())


// import express from "express";
// import exphbs from "express-handlebars";
// import bodyParser from "body-parser";
// import path from "path";
// import config from "./config/config";

// // Database
// import { db } from "./config/database";

// // Gigs routes
// import gigsRoutes from "./routes/gigs";

// const app = express();

// // Test DB
// db.authenticate()
//     .then(() => console.log(`Database connected...`))
//     .catch(err => console.log(`Error: ${err}`));
    
// // db.close();

// // routes
// app.get('/', (req, res) => res.status(200).send('INDEX'));
// app.use('/gigs', gigsRoutes);

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, console.log(`Server started on PORT ${PORT}`));