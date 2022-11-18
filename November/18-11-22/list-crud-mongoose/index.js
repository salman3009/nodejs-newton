const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/expense').then(()=>{
    console.log("Database is connected");
}).catch(()=>{
     console.log("Database connection failed");
});

app.listen(8080,()=>{
    console.log("Nodejs is running on 8080");
})



