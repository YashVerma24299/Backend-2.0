import express from 'express'
import "dotenv/config"
const app = express();
const PORT = process.env.PORT ||3000;

// not work
// console.log(__dirname);
// console.log(__filename);

// this will work
const __dirname = new URL (import.meta.dirname)
const __filename = new URL (import.meta.url)

app.get("/", (req,res)=>{
    // reload the page
    console.log("__dirname:",__dirname);
    console.log("__filename:",__filename);
    res.send("SEND FILES")
})
app.listen(PORT, ()=>{
    console.log("Server is Running on Port: ", PORT);
})




// ---------------------------------------------------------------------------------------------------------------

// import express from 'express'
// import "dotenv/config"
// import path from 'path'
// const app = express();
// const PORT = process.env.PORT ||3000;

// const homePagePath = path.join(import.meta.dirname, "index.html");

// app.get("/", (req,res)=>{
//     // res.send(homePagePath)
//     res.sendFile(homePagePath)
// })
// app.listen(PORT, ()=>{
//     console.log("Server is Running on Port: ", PORT);
// })