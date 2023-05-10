import { RequestHandler } from 'express';


export const alphaNumeric: RequestHandler = (req, res, next) => {
           console.log("comming here");        
        if(req.body.text.match(/^[a-z0-9]+$/)){
          console.log("passed");
                return next();
            }
            res.status(403).json({
                mesage:"Only alpha numeric is allowed",
                data:req.body.text
            })
}