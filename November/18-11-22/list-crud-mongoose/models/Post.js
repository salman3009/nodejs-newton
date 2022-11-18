const mongoose = require('mongoose');

const mongooseSchema = mongoose.Schema({
      expenseName : {type:String,required:true},
      amount:{type:Number,required:true},
      status:{type:Boolean,required:true}
});


module.exports = mongoose.model('Post',mongooseSchema);


