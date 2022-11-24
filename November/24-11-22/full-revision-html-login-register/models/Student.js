const mongoose = require('mongoose');

const mongooseSchema = mongoose.Schema({
    fullName:{type:String,required:true},
    age:{type:Number,required:true},
    course:{type:String,required:true},
    jobStatus:{type:Boolean,required:true}
});

module.exports = mongoose.model('student',mongooseSchema);