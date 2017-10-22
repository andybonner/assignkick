const Assignments = require('../models/user');
const router = require('express').Router();

// NB '/auth' portion of route is already being passed in, so this equals '/auth/register'
router.route('/add')
  .post(function (req, res) {
    console.log('route received as req.body:', req.body);

  });

module.exports = router;