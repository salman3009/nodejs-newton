const mongoose = require('mongoose');


const mongooseSchema = mongoose.Schema({
      fullName:{type:String,required:true},
      amount:{type:Number,required:true},
      codeId:{type:Boolean}
});

module.exports = mongoose.model('Salary',mongooseSchema);

