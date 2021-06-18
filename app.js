const http = require('http');

const express = require('express');
const app = express();

app.use((req,res,next)=>{
    console.log("1 middle ware");
    next();
});

app.use((req,res,next)=>{
    const url = req.url;
    console.log("2 middle ware");
    console.log(url);
    next();
});
const server =http.createServer(app);

server.listen(5000, () => console.log('5000 server Running.....'));