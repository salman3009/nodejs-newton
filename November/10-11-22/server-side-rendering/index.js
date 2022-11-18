const express = require('express');
const app = express();
const bodyParser= require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));


const employee = [{
    firstName: "akash",
    age: 45
}, {
    firstName: "suresh",
    age: 22
}, {
    firstName: "harry",
    age: 22
}];

app.get('', (req, res) => {
    res.render('home.ejs');
});

app.get('/login', (req, res) => {
    res.render('login.ejs');
});

app.get('/table', (req, res) => {
    res.render('table.ejs', { companyName: "Newton School", name: "akash suresh" ,list:employee});
});



app.post('/uploadDetails',(req,res)=>{
       console.log("upload",req.body);
       res.render('success.ejs',req.body);
});

app.listen(8080, () => {
    console.log("server is running");
})