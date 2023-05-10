import { RequestHandler } from 'express';
import Todo from '../models/todo';

export const createTodo: RequestHandler= (req:any, res, next) => {
  try{
    const text = (req.body as { text: string }).text;
    const id=Math.random().toString();
    let todo= new Todo({
      id:id,
      text:text
    })
    todo.save((err:any)=>{
      if(err){
        res.send(err)
      }
      else{
        console.log("The data is saved");
       req.todo=todo;
       return next();
      }
    })
  }catch(err){
    res.status(400).json({ message: 'error'});
  }
};

export const getTodos: RequestHandler = async (req, res, next) => {
   try{
      let data= await Todo.find();
      res.status(200).json({ message: 'sample data',todo:data});
   }catch(err){
    res.status(400).json({ message: 'error'});
   }  
};

export const updateTodo: RequestHandler<{ id: string }> = async (req, res, next) => {
   try{
    let update={
      text:req.body.text
    }   
    let filter={
      id:req.params.id
    }
  console.log("id",req.params.id);
  console.log("update",update);
let data= await Todo.findOneAndUpdate(filter,update);
res.status(200).json({ message: 'sample data',todo:data});
   }catch(err){
    res.status(400).json({ message: 'error'});
   }
};

export const deleteTodo: RequestHandler = async (req, res, next) => {
  try{   
    let filter={
      id:req.params.id
    }
let data= await Todo.remove(filter);
res.status(200).json({ message: 'sample data',todo:data});
   }catch(err){
    res.status(400).json({ message: 'error'});
   } 
};
