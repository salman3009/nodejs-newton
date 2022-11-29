const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.userLogin= async (req,res)=>{
    try{
        const result = await User.findOne({email:req.body.email});
        if(!result){
            res.status(400).json({
                status:"failure",
                message:"email not found"
            });
        }
        let passwordResult = await bcrypt.compare(req.body.password,result.password);
        if(!passwordResult){
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
        console.log('catch error');
    } 
}

exports.userRegister= async (req,res)=>{
    try{
        const passwordEncrypt = await bcrypt.hash(req.body.password,10);
        console.log(passwordEncrypt);
        const register = new User({
            email:req.body.email,
            password:passwordEncrypt
        });
        let result = await register.save();
        res.status(201).json({
            status:"successfull",
            list:result
        })
    }catch(err){
        res.status(400).json({
            status:"failure",
            error:err
        });
    }
}