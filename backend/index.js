import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"; 
import route from "./routes/bookRoute.js";
import cors from 'cors'
const app = express();
app.use(express.json());


dotenv.config({path: './config.env'});
const port = process.env.PORT; 

mongoose.connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});
app.use(cors());
// app.use(cors({
//     origin : 'http://localhost:5000',
//     methods : ['GET' , 'POST' , 'PUT' , 'DELETE'],
//     allowedHeaders : ['Content-Type'],
// }));
app.use('/books' , route)
app.listen(port, () => {
    console.log("Server is working on port " + port);
});

