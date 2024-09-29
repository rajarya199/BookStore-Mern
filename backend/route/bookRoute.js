import { Book } from '../models/bookModel.js'
import express from 'express';
const router=express.Router()

//route for save  a new book
router.post('/add',async(request,response)=>{
    try{
        if(
            !request.body.title ||
            !request.body.author ||
            ! request.body.publishYear
        ){
            return response.status(400).send({message:'Send all required feild: title,author,published year'})
        };
        const newBook={
            title:request.body.title,
            author:request.body.author,
            publishYear:request.body.publishYear
        }
        const book =await Book.create(newBook)
        return response.status(201).send(book)
    }
    catch (err){
        console.log(err.message)
        response.status(500).send({message:err.message})
    }
})
export default router