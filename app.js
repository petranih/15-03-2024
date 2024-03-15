const express = require('express');
const morgan = require("morgan");
const app = express();

const customerRouter = require('./route/customerRouter');

// middleware untuk membaca json dari request body 
app.use(express.json())

// middleware dari third part = 3rd party middleware
app.use(morgan('dev'));

// middleware kita sendiri
app.use((req, res, next) => {
    console.log("halo ini midlleware kita sendiri");
    next();
});

app.use((req, res, next )=> {
    req.requesTime = new Date().toISOString();
    next();
})

const defaultRouter = (req, res, next) => {
    res.send("<h1>hello word</h1>");
}


// localhost:3000
app.use("/api/v1/customers", customerRouter);
// app.get('/', defaultRouter);


module.exports = app;