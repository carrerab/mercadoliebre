const express = require('express');
const app = express();
const path = require("path");
const PORT = 3000

app.use(path, express.static(__dirname + '/public'));


app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.listen(PORT, ()=>{
    console.log('Servidor funcionando http://localhost:'+ PORT + " exitosamente");
});
