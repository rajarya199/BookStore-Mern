import express from 'express';
import { PORT } from './config.js';
import mongoose from "mongoose";
import { mongoURL } from "./config.js";

const app=express();

 mongoose.connect(mongoURL)
.then(()=>{
    console.log('app is connected to db')
})
.catch((error)=>{
    console.log(error)
})

app.get('/',(request,response)=>{
    console.log(request)
    return response.status(234).send('welcome to mern stack project')
})

app.listen(PORT,()=>{
    console.log(`server is running at :${PORT}`)
})