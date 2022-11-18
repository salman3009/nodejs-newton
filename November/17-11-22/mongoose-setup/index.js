const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Salary = require('./models/Salary');
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use((req,res,next)=>{
     console.log("coming to first middleware");
     return next();
});

mongoose.connect('mongodb://localhost/newton').then(()=>{
    console.log("database connection is successfull")
}).catch(()=>{
    console.log("connection failed");
});


app.post('/',(req,res)=>{
    const post = new Salary({
        fullName:req.body.fullName,
        amount:Number(req.body.amount),
        codeId:true
    });
    post.save().then((response)=>{
        res.status(201).json({
            result:response
        })
    }).catch((error)=>{
        res.status(500).json({
            result:error
        })   
    });
});

app.get('/',(req,res)=>{
    res.send("successfully submitted");
});



app.listen(8080,()=>{
    console.log("it is runningo port 8080")
});