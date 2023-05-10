import mongoose, { Schema, Document } from 'mongoose';
export const LoggerSchema:Schema=new Schema({
    username:{type:String,required:true},
},{ timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }});

 
export default mongoose.model('LoggerSchema', LoggerSchema);