const express = require('express');
const app = express();
const global = require('./helper');

let employee = [{
    fullName: "akash",
    age: 33,
    location: "Bangalore"
}, {
    fullName: "suresh",
    age: 22,
    location: "Delhi"
},
{
    fullName: "ram",
    age: 11,
    location: "Pune"
}];

app.use((req,res,next) => {
    console.log("frontend request is coming");
    return next();
});

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    return next();
});



app.get('', (req, res) => {
    let result =employee;
    if(req.query.fullName){
        result = global.filterDetails(result,'fullName',req.query.fullName);
    }
    if(req.query.age){
        result = global.filterDetails(result,'age',Number(req.query.age));
    }
    if(req.query.location){
        result = global.filterDetails(result,'location',req.query.location);
    }
    console.log(result);
    console.log(req.query);
    res.status(200).json({
        message:"successfully sent",
        list:result
    });
});

app.get("/setCookie",(req,res)=>{
    res.cookie("firstName","akash");
    res.send('Cookie have been saved successfully');
});


app.get('/:id', (req, res) => {
    console.log(req.params.id);
    let id = req.params.id;
    let input = employee[id];
    if(input){
        res.status(200).json({
            message:"individual id",
            result:input
        });
    }else{
        res.status(400).json({
            message:"Given id not matched"
        });  
    }
});







app.listen(8080, () => {
    console.log("server is running on port 8080");
})