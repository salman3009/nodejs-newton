import { RequestHandler } from 'express';
import Register from '../models/register';
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

export const userRegister: RequestHandler= (req:any, res, next) => {
  try{
    bcrypt.hash(req.body.password, 10).then((hash:any) => {
      let userCreate= new Register({
        email:req.body.email,
        password:hash
      })
      userCreate.save((err:any)=>{
        if(err){
          res.send(err)
        }
        else{
          res.status(201).json({ message: 'success'});
  
        }
      })
    
    })

}
catch(err){
  res.status(400).json({ message: 'error',error:err});
}
}


export const userLogin: RequestHandler= async (req:any, res, next) => {
  try{
    
    let data= await Register.findOne({ email: req.body.email })
    console.log("data",data);
    if(!data){
      res.status(400).json({ message: 'user not found'});
    }
    console.log("password",data.password);
    let result= await bcrypt.compare(req.body.password, data.password);
    console.log("result",result);  
    if(!result){
      res.status(400).json({ message: 'password does not match'}); 
    }

    const token = jwt.sign(
      { role:1,email: data.email},
      "secret_this_should_be_longer",
      { expiresIn: 50 }
    );

    res.status(200).json({
      token: token
    });

}
catch(err){
  res.status(400).json({ message: 'error',error:err});
}

}