const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Student = require('./models/Student');
const User = require('./models/User');
const e = require('express');
app.use(bodyParser.json());


mongoose.connect("mongodb://localhost/tres").then((success)=>{
     console.log("Database is connected successfully");
}).catch((error)=>{
      console.log("connection failed");
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




app.post('/student',(req,res)=>{
    const finalResult = new Student({
        fullName:req.body.fullName,
        age:req.body.age,
        course:req.body.course,
        jobStatus:req.body.jobStatus
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
});



app.post('/register',(req,res)=>{
    const register = new User({
        email:req.body.email,
        password:req.body.password
    });
    register.save().then((response)=>{
        res.status(201).json({
            status:"successfull",
            list:response
        })
    }).catch((error)=>{
        res.status(400).json({
            status:"failure",
            error:error
        });
    });
});

app.post('/login', async (req,res)=>{
    try{
        const result = await User.findOne({email:req.body.email});
        if(!result){
            res.status(400).json({
                status:"failure",
                message:"email not found"
            });
        }
        if(result.password!=req.body.password){
            res.status(400).json({
                status:"failure",
                message:"password does not match"
            });
        }
        else{
            res.status(200).json({
             status:"success",
             message:result
            })
       }   
    }catch(err){
        res.status(400).json({
            status:"failure",
            message:err
        });
    } 
});


app.listen(8080,()=>{
    console.log("server is runing on 8080");
});