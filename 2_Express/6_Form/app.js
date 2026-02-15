import express from 'express'
import path from 'path'
const app= express();
const PORT =3000;
app.listen(PORT, ()=>{
    console.log("Server is listening on PORT:", PORT);
})

const formPagePath = path.join(import.meta.dirname, "index.html");
app.get('/', (req, res)=>{
    res.sendFile(formPagePath)
})


app.get('/details', (req, res)=>{
    console.log(req.query);
    const {userName, userMessage} =req.query;
    res.send(`Your enter name is ${userName} and your enter message is ${userMessage}`)
})


app.use(express.urlencoded({extended: true}))
app.post('/details', (req, res)=>{
    console.log(req.body);
    const {userName, userMessage} =req.body;
    res.send(`Your enter name is ${userName} and your enter message is ${userMessage}`)
})


const errorPagePath = path.join(import.meta.dirname,"views", "404.html");
app.use((req,res)=>{
    res.sendFile(errorPagePath)
})
