let CronJob = require('cron').CronJob;
const emailer = require('./emailer');
const nodemailer = require('nodemailer');
// const moment = require('moment');
const q = require("q");

// TODO: reinstate "scheduleDate" as the second parameter
module.exports = function scheduleEmailCronJob(email) {
  const deferred = q.defer();
  // console.log('scheduleDate:', scheduleDate);
  const scheduleTime = new Date(Date.now());
  scheduleTime.setMinutes(scheduleTime.getMinutes() + 2);
  console.log('scheduleTime:', scheduleTime);

  try {
    const job = new CronJob({
      cronTime: scheduleTime,
      onTick: function () {

        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'assignkick.qwad@gmail.com',
            pass: 'assignkick'
          }
        });

        const mailOptions = {
          from: '"AssignKick" assignkick@gmail.com',
          to: email,
          subject: `AssignKick reminder`,
          text: `This is just a reminder. Your assignment is due on ${scheduleTime}!

            - AssignKick`
        };

        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        });
      },
      start: false,
      timeZone: 'America/New_York'
    });
    job.start();
    deferred.resolve();
  } catch (ex) {
    console.log("cron pattern not valid");
    deferred.reject(ex);
  }
  return deferred.promise;
}
