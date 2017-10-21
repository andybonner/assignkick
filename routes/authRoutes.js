const passport = require('passport');
const User = require('../models/user');
const router = require('express').Router();

module.exports = function () {
  
  // NB '/auth' portion of route is already being passed in, so this equals '/auth/register'
  router.route('/register')
  .post(function(req, res) {
    console.log('route received as req.body:', req.body);
    User.register(new User({
      email : req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      nickname: req.body.nickname
    }), req.body.password, function(err, user) {
      if (err) {
        // return res.redirect('/auth/register', { user : user });
        return res.json({user: user})
      }
      
      passport.authenticate('local')(req, res, function () {
        res.redirect('/main');
      });
    });
  });
  
  // app.get('/login', function(req, res) {
  //   res.render('login', { user : req.user });
  // });
  
  router.route('/login')
  .post(function(req, res) {
    res.redirect('/main');
  })
  
  router.route('/logout')
  .get(function(req, res) {
    req.logout();
    res.redirect('/');
  });

  router.route('/ping')
  .get(function(req, res) {
    console.log('pong!');
    res.status(200).send('pong');
  })

  
};