const Assignments = require('../models/assignments');
const router = require('express').Router();

// NB '/api' portion of route is already being passed in, so this equals '/api/register'
router.route('/add')
  .post(function (req, res) {
    console.log('route received as req.body:', req.body);
    Assignments.create(req.body);
  });

router.route('/assignments')
  .get((req, res) => {
    console.log(req.query)
    Assignments.find(req.query)
      .then(dbModel => res.json(dbModel))
  })

module.exports = router;