import express from 'express';
import { PORT } from './config.js';
import mongoose from "mongoose";
import bookRoute from './route/bookRoute.js'
import { mongoURL } from "./config.js";

const app=express();

//middleware for prasing request body
app.use(express.json());

 mongoose.connect(mongoURL)
.then(()=>{
    console.log('app is connected to db')
})
.catch((error)=>{
    console.log(error)
})


app.use('/books',bookRoute)


app.get('/',(request,response)=>{
    console.log(request)
    return response.status(234).send('welcome to mern stack project')
})

app.listen(PORT,()=>{
    console.log(`server is running at :${PORT}`)
})