import express from 'express'
const app= express();
const PORT =3000;
app.listen(PORT, ()=>{
    console.log("Server is listening on PORT:", PORT);
})

app.get('/home/', (req, res)=>{
    res.send("HomePage")
})

app.get('/home/:username', (req, res)=>{
    console.log(req.params);
    res.send(`Hello ${req.params.username}!`)
})

app.get('/home/:username/article/:articleId', (req, res)=>{
    console.log(req.params);
    let {username, articleId} = req.params;
    res.send(`Hello ${username}. Your Id is ${articleId}`)
})