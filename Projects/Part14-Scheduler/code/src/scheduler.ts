const Schedule = require('node-schedule');


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
    console.log("coming here sendMail");
}

