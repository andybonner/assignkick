let CronJob = require('cron').CronJob;
const emailer = require('./emailer');
var q = require("q");

  module.exports = function scheduleEmailCronJob(email, scheduleDate){
    var deferred = q.defer();
    var scheduleTime = '00 '+ scheduleDate.mins + ' ' + scheduleDate.hours + ' ' + scheduleDate.day + ' ' + scheduleDate.month + ' *';

    try {
      var job = new CronJob({
        cronTime: scheduleTime,
        onTick: function() {
          emailer(
            "Assignment Due",
            "<h1>Dear " +
            email +
            "</h1><p>Your Assignment Is due in two days",
            email
          )
            .then(() => {
              console.log("Email sent to user :  ", email)
            })
            .catch(err => {
              console.log("Error sending Email \n", err);
            });
        },
        start: false,
        timeZone: 'Asia/Karachi'
      });
      job.start();
      deferred.resolve();
    } catch(ex) {
      console.log("cron pattern not valid");
      deferred.reject(ex);
    }
    return deferred.promise;
  }
