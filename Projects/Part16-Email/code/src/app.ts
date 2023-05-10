import express, { Request, Response, NextFunction } from 'express';
import { json } from 'body-parser';
import mongoose from 'mongoose';
import todoRoutes from './routes/todos';
import authRoutes from './routes/auth';
const scheduler = require('./scheduler');
const app = express();

mongoose.connect("mongodb://localhost/todos").then(()=>{
  console.log("connnected");
  scheduler.start();
}).catch(
  ()=>{
    console.log("failed");
});

app.use(json());

app.use('/todos', todoRoutes);
app.use('/auth', authRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.listen(3000);
