const express = require('express');
const app = express();
let port = 3000

app.get('/',(req,res)=>{
    res.send('Default request');
})

app.get('/home',(req,res)=>{
    res.send('Request to home page');
})

app.get('/about',(req,res)=>{
    res.send('Request to about page');
})

app.listen(port,()=>{
    console.log(`App starting at ${port}...`)
})