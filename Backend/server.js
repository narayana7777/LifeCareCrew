import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv/config'
import path from 'path'
import cookieParser from 'cookie-parser'
import DBconnect from './database/dbConnect.js'



const app = express()
const PORT = process.env.PORT || 4036
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use(cookieParser())


DBconnect()
.then(()=>{
    console.log('Database Connection Successfull');
    app.listen(PORT,()=>{
        if(PORT === 4036) { 
            console.log(`Server Started on ${PORT}`);
        } 
        else{
            console.log(`Server Started on Existing PORT`);
        }
    })
})
.catch(()=>{
    console.log('Server Not Responded');
})
