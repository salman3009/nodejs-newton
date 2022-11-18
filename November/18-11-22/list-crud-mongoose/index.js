const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Post = require('./models/Post');
app.use(bodyParser.json());


mongoose.connect('mongodb://localhost/newtonexpense').then(()=>{
    console.log("Database is connected");
}).catch(()=>{
     console.log("Database connection failed");
});

app.post('',(req,res)=>{   
    const result = new Post({
       expenseName:req.body.expenseName,
       amount:Number(req.body.amount),
       status:req.body.status
    });
    result.save().then((input)=>{
        res.status(201).json({
            result:input
         })
    }).catch((error)=>{
        res.status(400).json({
            info:error
         }) 
    }) 
});

app.get('',(req,res)=>{
    Post.find().then((object)=>{
        res.status(200).json({
            result:object
        });
    }).catch((error)=>{
        res.status(400).json({
            info:error
         }) 
    }); 
})

app.delete('/:id',(req,res)=>{
    console.log(req.params.id);
   Post.findByIdAndRemove(req.params.id).then((object)=>{
    res.status(200).json({
        result:object
    });
   }).catch((error)=>{
    res.status(400).json({
        info:error
     }) 
}); 
})

app.patch('/:id',(req,res)=>{
    console.log(req.params.id);
   Post.findByIdAndUpdate(req.params.id,{...req.body}).then((object)=>{
    res.status(200).json({
        result:object
    });
   }).catch((error)=>{
    res.status(400).json({
        info:error
     }) 
}); 
});

app.listen(8080,()=>{
    console.log("Nodejs is running on 8080");
})



