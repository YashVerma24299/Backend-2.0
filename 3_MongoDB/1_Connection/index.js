import connectDB from "./db.js";
import User from "./models/User.js";
import mongoose from "mongoose";
import "dotenv/config";


await connectDB();

// const user1 = new User({
//     name:"Yash",
//     email: "Yash@gmail.com",
//     age:21
// })  
// user1.save();

// User.insertMany([
//     {
//         name:"Tony111",
//         email:"Tony123@gmail.com",
//         age:20
//     },
//     {
//         name:"Mony",
//         email:"mony9876@gmail.com",
//         age:56
//     },
//     {
//         name:"Peter",
//         email:"abc@gmail.com",
//         age:45
//     },
// ]);

//userData
// console.log("UserData:", User.collection.find().toArray())
// console.log("UserData:", await User.collection.find().toArray())