/*
 * Run the project and access the documentation at: http://localhost:3000/doc
 *
 * Use the command below to generate the documentation without starting the project:
 * $ npm start
 *
 * Use the command below to generate the documentation at project startup:
 * $ npm run start-gendoc
 */

import 'dotenv/config';

// import swaggerUi from 'swagger-ui-express';
// import { readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(
    import.meta.url);
// 👇️ "/home/john/Desktop/javascript"
const __dirname = path.dirname(__filename);
import express from 'express';
const app = express();
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, "/public/views")); // use pug templates file in /public/views subdirectory

import clientWeb from './controllers/ClientController.js'
import bodyParser from 'body-parser';
app.use(bodyParser.json());
/* Routes */
import router from './routes.js';

app.use(express.static(path.join(__dirname, 'public/views/js')))
app.use(express.static('@cosmjs/launchpad'));

app.use(clientWeb)

app.use(router);

app.listen(3000, () => {
    console.log("Server is running!\nAPI documentation: http://localhost:3000/docs");
})
