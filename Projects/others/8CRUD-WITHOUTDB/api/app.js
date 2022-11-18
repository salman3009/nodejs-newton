const express = require('express');

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req,res,next)=>{
    console.log('first middleware');
    next();
});

// app.use((req,res,next)=>{
//     res.send('Hello from dddddddexpress!');
// });

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, DELETE, OPTIONS"
    );
    next();
  });

  app.post("/api/posts", (req, res, next) => {
    const post = req.body;
    console.log(post);
    res.status(201).json({
      message: 'Post added successfully'
    });
  });

  
app.get("/api/posts",(req,res,next)=>{
const posts=[
    {
        id:"dad1212",
        title:"Frist server-sixe post",
        content:"This is coming from the server"
    },
    {
        id:"faf2323",
        title:"Second server",
        content:"This is second server"
    }
];
res.status(200).json({
message:'Posts fetched successful',
posts:posts
});
});




module.exports = app;