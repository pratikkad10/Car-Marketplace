import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { connectToDatabase } from './utils/db.js'
import userRouter from './routes/user.routes.js'
import carRouter from './routes/car.routes.js'

dotenv.config()
const app=express()
connectToDatabase()
const port=process.env.PORT || 8080

app.use(
    cors({
      origin: process.env.BASE_URL,
      credentials: true,
      methods: ["GET", "POST", "DELETE", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization"],
    })
  );

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/api/v1/users', userRouter);
app.use('/api/v1/cars', carRouter);

app.get('/', (req,res)=>{
    res.send("Hiie there..........!")
})

app.listen(port, (req,res)=> console.log(`server is listening on port ${port}`))
