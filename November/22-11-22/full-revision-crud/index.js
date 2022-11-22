const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('',(req,res)=>{
    res.send("hello world");
});

app.get('/instructor',(req,res)=>{
    res.send(`<h1>hello world instructor</h1>
    <h2>welcome to newton school</h2>`);
});

app.get('/course',(req,res)=>{
    res.status(200).json({
        list:[{
            employee:"akash",
            age:11
        },{
            employee:"suresh",
            age:11
        }]
    })
})

app.get('/date/:id',(req,res)=>{
    res.status(200).json({
        type:req.params.id
    })
});


app.post('/gmail',(req,res)=>{
    console.log(req.body);
    res.status(201).json({
        message:"successfully added"
    })
})

app.listen(8080,()=>{
    console.log("server is runing on 8080");
});