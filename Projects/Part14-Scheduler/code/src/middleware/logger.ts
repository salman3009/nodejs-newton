import { RequestHandler } from 'express';
import Logger from '../models/logger';

export const logger: RequestHandler = (req:any, res, next) => {
  try{
    let LoggerSave= new Logger({
        username:req.query.username
    })
    LoggerSave.save((err:any)=>{
      if(err){
        res.send(err)
      }
      else{
        res.status(201).json({ message: 'successfully created.', createdTodo: req.todo });
      }
    })
  }catch(err){
    res.status(400).json({ message: 'error'});
  }
};