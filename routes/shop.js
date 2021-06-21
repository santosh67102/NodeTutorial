const express = require('express');

const route = express.Router();

route.get('/',(req,res,next)=>{
    res.send('<h2>This is home page : SHOP </h2>');
});

module.exports = route;