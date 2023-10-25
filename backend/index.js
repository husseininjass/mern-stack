import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"; 
import {Book}  from "./model/bookModel.js";
const app = express();
app.use(express.json());
const landingPage = (req, res) => {
    res.status(200).send('Hello');
};

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
app.post('/book' , (req , res)=>{
    const newBook = {
        title : req.body.title,
        author : req.body.author,
        publishYear : req.body.publishYear
    }
    Book.create(newBook).then(book => res.status(201).send(book))
})
app.get('/books' ,(req , res)=>{
    Book.find()
    .then(books => {
        res.status(200).json({
            count : books.length,
            data : books
        })
    })
})
app.get('/books/:id' ,(req , res)=>{
    const {id} = req.params;
    Book.findById(id)
    .then(book => {
        res.status(200).json({
            data : book
        })
    })
})
app.get('/', landingPage);

app.listen(port, () => {
    console.log("Server is working on port " + port);
});

