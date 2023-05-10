import mongoose, { Schema } from 'mongoose';
const uniqueValidator = require("mongoose-unique-validator");

export const RegisterSchema:Schema=new Schema({
    email:{type:String,required:true, unique: true},
    password:{type:String,required:true},
});

RegisterSchema.plugin(uniqueValidator);

export default mongoose.model('RegisterSchema', RegisterSchema);