var express = require('express');
var app = express();
 
// Set EJS as templating engine
app.set('view engine', 'ejs');


app.get('/', (req, res)=>{
 
    // The render method takes the name of the HTML
    // page to be rendered as input
    // This page should be in the views folder
    // in the root directory.
    var data = {name:'akash',
    hobbies:['playing cricket', 'playing chess', 'throwball']}
 
res.render('home', {data:data});
     
    });
  
 app.listen(8080,()=>{
    console.log("port is running");
 })   