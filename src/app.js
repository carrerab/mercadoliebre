const express = require('express');
const app = express();
const path = require("path");
const PORT = 3000

app.use(express.static(path.join(__dirname,"../public/")));

app.get('/', (req,res)=>{
    const filePath = path.join(__dirname,"../views/home.html");
    res.sendFile(filePath)
});

app.get('/login', (req,res)=>{
    const filePath = path.join(__dirname,"../views/login.html");
    res.sendFile(filePath)
});

app.get('/register', (req,res)=>{
    const filePath = path.join(__dirname,"../views/register.html");
    res.sendFile(filePath)
});

app.listen(PORT, ()=>{
    console.log('Servidor funcionando http://localhost:'+ PORT + " exitosamente");
});
