const jwt = require("jsonwebtoken");
import { RequestHandler } from 'express';

export const auth: RequestHandler = (req:any, res:any, next:any) => {
  try {
    const token = req.headers.authorization;
    const decodedToken = jwt.verify(token, "secret_this_should_be_longer");
    req.userData = { role: decodedToken.role, email: decodedToken.email};
    console.log("req.userData",req.userData);
    next();
  } catch (error) {
    res.status(401).json({ message: "You are not authenticated!" });
  }
};

