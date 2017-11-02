const CronJob = require('cron').CronJob;
const nodemailer = require('nodemailer');
const q = require("q");

function scheduleIndividualAlert(email, firstName, assignTitle, endDate, daysUntil) {
  const deferred = q.defer();
  const now = new Date(Date.now());
  const scheduleTime = new Date(endDate);
  scheduleTime.setDate(endDate.getDate() - daysUntil);

  // check: if the assignment due date is sooner than this reminder, abort
  if (scheduleTime < now) {
    return;
  }

  let daysMessage = "";
  switch (daysUntil) {
    case 7:
      daysMessage = "in a week."
      break;
    case 2:
      daysMessage = "in two days."
      break;
    case 1:
      daysMessage = "tomorrow!"
      break;
    case 0:
      daysMessage = "today. Don't forget to turn it in!"
      break;
    default:
      daysMessage = "soon."
      break;
  }

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
          text: `Hey ${firstName}!
          Just a reminder: Your assignment "${assignTitle}" is due ${daysMessage}
          Go for it!

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
    console.log(`Email scheduled for ${firstName} at ${email} on ${scheduleTime} `);
    job.start();
    deferred.resolve();
  } catch (ex) {
    console.log("cron pattern not valid");
    deferred.reject(ex);
  }
  return deferred.promise;
}

module.exports = function scheduleEmailCronJob(email, firstName, assignTitle, endDate) {
  scheduleIndividualAlert(email, firstName, assignTitle, endDate, 7);
  scheduleIndividualAlert(email, firstName, assignTitle, endDate, 2);
  scheduleIndividualAlert(email, firstName, assignTitle, endDate, 1);
  scheduleIndividualAlert(email, firstName, assignTitle, endDate, 0);
}
