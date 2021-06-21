const express = require('express');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const bodyparser = require('body-parser');

const app = express();

app.use(bodyparser.urlencoded({extended:false}));

app.use(adminRoutes);
app.use(shopRoutes);

app.use((req,res)=>{
res.status(404).send('<h1>404 Error: Page Not Found.</h1>');
});

app.listen(5000);