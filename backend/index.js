import express, { request } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { mpg } from "./models/entryModel.js";
import entryRoute from './routes/entryRoute.js '
import cors from "cors";

const app = express();

// Middleware for parsing request body 
app.use(express.json());

// Middleware for handling CORS policy 
// CORS = Cross-Origin-Resource-Sharing
// Option 1: Allow All Origins with default of cors(*)
app.use(cors());

// Option 2: Allow Custom Origins 
// app.use(
//     cors({
//         origin: 'http://localhost:3000',  
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type'],
//     })
// );

app.get('/', (request, response) => {
    console.log(request);
    return response.status(200).send('Welcome to MERN STACK Tutorial');
});

app.use('/mpg', entryRoute);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });