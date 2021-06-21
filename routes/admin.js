const express = require('express');

const routes = express.Router();

routes.get('/addProduct',(req,res,next)=>{
    res.send('<form action ="/product" method="POST"><input type="text" name="input-text"><button type ="submit">Send</button></form>');
});

routes.post('/product', (req, res, next) =>{
    console.log(req.body);
    res.redirect('/');
});


module.exports = routes;