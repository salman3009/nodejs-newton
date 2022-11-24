const User = require('../models/User');


exports.userLogin= async (req,res)=>{
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
        console.log('catch error');
    } 
}

exports.userRegister=(req,res)=>{
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
}