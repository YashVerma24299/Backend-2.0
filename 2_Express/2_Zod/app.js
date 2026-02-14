import express from 'express'
import "dotenv/config"
import {z} from 'zod'

const app = express();
const PORT = process.env.PORT;
const ageSchema =z.number().min(6).max(10).int();

app.get("/", (req,res)=>{
    res.send("ZOD")
})

app.listen(PORT, ()=>{
    console.log("Server is Running on Port: ", PORT);
})
