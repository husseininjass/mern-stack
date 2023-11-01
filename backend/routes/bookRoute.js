import express from 'express'
import { Book } from '../model/bookModel.js';
const router = express.Router();
router.post('/' , (req , res)=>{
    const newBook = {
        title : req.body.title,
        author : req.body.author,
        publishYear : req.body.publishYear,
        price : req.body.price,
        description : req.body.description
    }
    Book.create(newBook).then(book => res.status(201).send(book))
})
router.get('/' ,(req , res)=>{
    Book.find()
    .then(books => {
        res.status(200).json({
            count : books.length,
            data : books
        })
    })
})
router.put('/edit/:id' , (req , res)=>{
    const {id} = req.params;
    Book.findByIdAndUpdate(id , req.body)
    .then(book=>{
        res.status(200).send(book)
    })
})
router.delete('/:id' , (req , res)=>{
    const {id} = req.params;
    Book.findByIdAndDelete(id)
    .then(book=>{
        res.status(200).send('deleted')
    })
})
router.get('/:id' ,(req , res)=>{
    const {id} = req.params;
    Book.findById(id)
    .then(book => {
        res.status(200).json({
            data : book
        })
    })
})
export default router