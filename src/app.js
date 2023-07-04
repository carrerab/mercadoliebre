const express = require('express');
const app = express();
const path = require("path");
const port = process.env.PORT || 3001

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

app.listen(port, ()=>{
    console.log('Servidor funcionando http://localhost:'+ port + " exitosamente");
});
