const Student = require('../models/student');

exports.getStudents = async (req, res) => {

    // let result = await Student.aggregate([
    //     { $match: { course: 'MEAN', jobStatus: true } },
    //     { $project: { _id: 0, 'fullName': 1, 'course': 1 } },
    //     { $sort: { 'fullName': 1 } },
    //     { $limit: 5}
    // ])

    // let result = await Student.aggregate([
    //      {
    //         $group : {
    //             _id : null,
    //            score: { $avg: "$score" }
    //         }
    //       }
    // ])

    //    let result = await Student.aggregate([
    //      {
    //         $group : {
    //             _id : null,
    //            score: { $avg: "$score" },
    //            count: { $sum: 1 }
    //         }
    //       }
    // ])

    let result = await Student.aggregate([
        [ { $group : { _id : "$course" } } ]
   ])

    res.status(200).json({
        status: result
    });

}

exports.postStudents = (req, res) => {
    const finalResult = new Student({
        fullName: req.body.fullName,
        age: req.body.age,
        course: req.body.course,
        jobStatus: req.body.jobStatus,
        score:req.body.score
    });
    finalResult.save().then((result) => {
        res.status(201).json({
            status: result
        })
    }).catch((error) => {
        res.status(400).json({
            error: error
        })
    })
}