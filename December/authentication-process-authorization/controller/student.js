const Student = require('../models/Student');

exports.getStudents=(req,res)=>{
    console.log(req.emailToken);
    Student.find({email:req.emailToken}).then((result)=>{
        res.status(200).json({
            status:result
        });
    }).catch((error)=>{
        res.status(400).json({
            error:error
        });
    })
}

// exports.getStudentsFilter=(req,res)=>{
//       Student.aggregate([{$match:{course:'MEAN',jobStatus:true}},
//       {$project:{fullName:1,course:1,_id:0}} ,
//       {$sort:{'fullName':1}},
//       {$limit:4}     
//     ]).then((response)=>{
//            res.status(200).json({
//                list:response
//            });
//       }).catch((error)=>{
//            res.status(400).json({
//                list:error
//            });
//       })
// }


exports.getStudentsFilter= async (req,res)=>{
    // let response = await Student.aggregate([{$group:{_id:"$fullName"}}]);
    let response = await Student.aggregate([{$group:{_id:null,count: { $sum: 1 },average: { $avg: "$score" }}}]);
    console.log(response[0].average.toFixed(2));
    response[0].average = response[0].average.toFixed(2);
    res.status(200).json({
        list:response
    });
}

exports.postStudents=(req,res)=>{
    const finalResult = new Student({
        fullName:req.body.fullName,
        age:req.body.age,
        course:req.body.course,
        jobStatus:req.body.jobStatus,
        score:req.body.score,
        email:req.emailToken
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