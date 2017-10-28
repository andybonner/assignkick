const Assignments = require('../models/assignments');
const router = require('express').Router();

// NB '/auth' portion of route is already being passed in, so this equals '/auth/register'
router.route('/add')
  .post(function (req, res) {
    Assignments
      .create(req.body);
  });

router.route('/assignments')
  .get((req, res) => {
    Assignments
      .find(req.query)
      .then(dbModel => res.json(dbModel))
  });

router.route("/assignments/:id")
  .delete((req, res) => {
    Assignments
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  });

module.exports = router;