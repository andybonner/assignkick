const scheduleEmailCronJob = require('../components/emailCronJob');
const Assignments = require('../models/assignments');

module.exports = function emailScheduler(req, res){

  console.log('emailscheduler received as req.body:', req.body);
  Assignments.create(req.body)
  .then(assignment => {
    
    if (!assignment) {
      return res.status(404).end();
    }
    let endDate = new Date(req.body.end);
    let notifyDate = new Date(new Date().setDate(endDate.getDate() - 2))
    
    let scheduleDate = {};
    scheduleDate.month = notifyDate.getMonth();
    scheduleDate.day = notifyDate.getDate();
    
    scheduleDate.hours = notifyDate.getHours();
    scheduleDate.mins = notifyDate.getMinutes();

    const now = new Date(Date.now);
  
    scheduleEmailCronJob(req.body.user_email, now);
    
    scheduleEmailCronJob(req.body.user_email, scheduleDate)
    .then(() => {
      res.json(assignment);
    })
    .catch(err => {
      console.log("Error Creating Job \n", err);
    });
    
  })
  .catch(err => res.json(err));
}
