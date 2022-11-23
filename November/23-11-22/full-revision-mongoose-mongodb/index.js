const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Student = require('./models/Student');
app.use(bodyParser.json());


mongoose.connect("mongodb://localhost/tres").then((success)=>{
     console.log("Database is connected successfully");
}).catch((error)=>{
      console.log("connection failed");
});

app.get('',(req,res)=>{
    res.send("hello world");
});

app.get('/instructor',(req,res)=>{
    res.send(`<h1>hello world instructor</h1>
    <h2>welcome to newton school</h2>`);
});

app.get('/student',(req,res)=>{
    Student.find().then((result)=>{
        res.status(200).json({
            status:result
        });
    }).catch((error)=>{
        res.status(400).json({
            error:error
        });
    })
});

app.get('/date/:id',(req,res)=>{
    res.status(200).json({
        type:req.params.id
    })
});


app.post('/gmail',(req,res)=>{
    console.log(req.body);

    const finalResult = new Student({
        fullName:req.body.fullName,
        age:req.body.age
    });

    finalResult.save().then((result)=>{
      res.status(201).json({
        status:result
      })
    }).catch((error)=>{
        res.status(400).json({
         error:error
        })
    })

})

app.listen(8080,()=>{
    console.log("server is runing on 8080");
});