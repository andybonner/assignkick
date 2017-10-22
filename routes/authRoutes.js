const passport = require('passport');
const User = require('../models/user');
const router = require('express').Router();

// NB '/auth' portion of route is already being passed in, so this equals '/auth/register'
router.route('/register')
  .post(function (req, res) {
    console.log('route received as req.body:', req.body);
    
    User.register(new User({
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      username: req.body.email
    }), req.body.password, function (err, user) {
      if (err) {
        console.log('Error:', err);
      }

      passport.authenticate('local'),
      function(req, res) {
        res.json(req.user);
      }
    });
  });

router.route('/login')
  .post(function (req, res) {
    passport.authenticate('local'),
    function (req, res) {
      res.json(req.user);
    }
  })

router.route('/logout')
  .get(function (req, res) {
    req.logout();
    res.redirect('/');
  });

router.route('/ping')
  .get(function (req, res) {
    console.log('pong!');
    res.status(200).send('pong');
  })

module.exports = router;