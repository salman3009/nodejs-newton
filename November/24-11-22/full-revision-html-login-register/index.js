const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const studentRouter = require('./routes/student');
const userRouter = require('./routes/user');

app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/tres").then((success)=>{
     console.log("Database is connected successfully");
}).catch((error)=>{
      console.log("connection failed");
});

app.use('',userRouter);
app.use('/student',studentRouter);


app.listen(8080,()=>{
    console.log("server is runing on 8080");
});