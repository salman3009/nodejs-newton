const Student = require('../models/Student');

exports.getStudents=(req,res)=>{
    Student.find().then((result)=>{
        res.status(200).json({
            status:result
        });
    }).catch((error)=>{
        res.status(400).json({
            error:error
        });
    })
}

exports.postStudents=(req,res)=>{
    const finalResult = new Student({
        fullName:req.body.fullName,
        age:req.body.age,
        course:req.body.course,
        jobStatus:req.body.jobStatus
    });
    finalResult.save().then((result)=>{
      res.status(201).json({
        status:result
      })
    }).catch((error)=>{
        res.status(400).json({
         error:error
        })
    })
}