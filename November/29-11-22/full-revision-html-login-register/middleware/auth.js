

module.exports=(req,res,next)=>{
    try{
        console.log("comming to middleware");
        res.status(401).json({
            message:"unthorized person"
        })
        // next();
    }catch(err){
        res.status(401).json({
            message:"unthorized person"
        })
    }     
}