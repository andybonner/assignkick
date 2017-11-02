const scheduleEmailCronJob = require('../components/emailCronJob');
const Assignments = require('../models/assignments');

function makeDateObj(date, advanceDays) {
  const endDate = new Date(date);
  const notifyDate = new Date(new Date().setDate(endDate.getDate() - advanceDays));

  const scheduleDate = {};
  scheduleDate.year = notifyDate.getFullYear();
  scheduleDate.month = notifyDate.getMonth();
  scheduleDate.day = notifyDate.getDate();
  scheduleDate.hours = notifyDate.getHours();
  scheduleDate.mins = notifyDate.getMinutes();
}

module.exports = function emailScheduler(req, res) {
  console.log('emailscheduler received as req.body:', req.body);
  const endDate = new Date(req.body.end);
  scheduleEmailCronJob(req.body.email, req.body.firstName, req.body.title, endDate);
  Assignments.create(req.body)
    .then(assignment => {
      if (!assignment) {
        return res.status(404).end();
      }
      res.json(assignment);
    })
    .catch(err => res.json(err));
}
