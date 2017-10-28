const Assignments = require('../models/assignments');
const router = require('express').Router();

// NB '/auth' portion of route is already being passed in, so this equals '/auth/register'
router.route('/add')
  .post(function (req, res) {
    Assignments.create(req.body);
  });

router.route('/assignments')
  .get((req, res) => {
    Assignments.find(req.query)
      .then(dbModel => res.json(dbModel))
  })

module.exports = router;