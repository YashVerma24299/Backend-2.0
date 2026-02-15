import express from 'express'
const app= express();
const PORT =3000;
app.listen(PORT, ()=>{
    console.log("Server is listening on PORT:", PORT);
})

app.get('/product/', (req, res)=>{
    console.log(req.query);
    const {search} =req.query;
    if(search){
        // http://localhost:3000/product?search=34567  -> If search key is present with value, it works*
        res.send(`User search for ${search} Product `)
    }
    res.send(`Product Page`)
})
