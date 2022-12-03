const jsonwebtoken =require('jsonwebtoken');

module.exports=(req,res,next)=>{
    try{
        console.log("comming to middleware");
        const authorization = req.headers.authorization;
        const decode = jsonwebtoken.verify(authorization,'document-success');
        console.log(decode);
        req.emailToken = decode.userDetails.email;
        next();
    }catch(err){
        res.status(401).json({
            message:"unthorized person",
            error:err
        })
    }     
}