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

// route for get  all book frm db
router.get('/all',async(request,response)=>{
    try{ 
        const books= await Book.find({})
        return response.status(200).json({
            count:books.length,
            data:books
        })

    }
    catch (error){
        console.log(error)
        response.status(500).send({message:error.message});
    }
})

//route for Get One Book from database by id
router.get('/bookdetail:id', async (request, response) => {
    try {
      const { id } = request.params;
  
      const book = await Book.findById(id);
  
      return response.status(200).json(book);
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });
export default router