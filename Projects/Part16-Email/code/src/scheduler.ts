const Schedule = require('node-schedule');
const nodemailer = require('nodemailer');

module.exports = {
    //This method is for starting scheduler
    start: function () {
         console.log("schedulerConfiguration: Entering the sendmail scheduler");
        try {
            var j = Schedule.scheduleJob('*/5 * * * * *', function () {
                sendMail();
            });
        } catch (e) {
            console.log("schedulerConfiguration :Exception in sendmail scheduler ", e);
        }
    },
}

function sendMail() {

            let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                 user: 'Support@loanbook.info',
                  pass: 'loanbook@123'
                 }
            });

            let mailOptions = {
                from: 'admin@dhanainnovations.com',
                to: 'salman444g@gmail.com',
                subject: "Enquiry Mail From :",
                text: "Dear team",
                attachments: [],

            };
            transporter.sendMail(mailOptions, function (error:any, info:any) {
                if (error) {
                  console.log("error",error);
                }
                console.log("info",info);
            });

}



