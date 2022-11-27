const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const app = express();
const userRoutes = require("./routes/user");
const studentRouter = require('./routes/student');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log('first middleware');
  next();
});


mongoose.connect("mongodb://localhost/authusers").then(()=>{
  console.log("connnected");
}).catch(
  ()=>{
    console.log("failed");
  });


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT,DELETE, OPTIONS"
  );
  next();
});

app.use("/api", userRoutes);
app.use('/student',studentRouter);

module.exports = app;
