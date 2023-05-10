import mongoose, { Schema, Document } from 'mongoose';




export const TodoSchema:Schema=new Schema({
    id:{type:String,required:true},
    text:{type:String,required:true},
});

 
export default mongoose.model('TodoSchema', TodoSchema);