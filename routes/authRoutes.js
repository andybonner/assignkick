const passport = require('passport');
const User = require('../models/user');
const router = require('express').Router();

module.exports = function (app) {
  
  router.route('/auth/register')
  .post(function(req, res) {
    User.register(new User({
      email : req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      nickname: req.body.nickname
    }), req.body.password, function(err, user) {
      if (err) {
        return res.redirect('/auth/register', { user : user });
      }
      
      passport.authenticate('local')(req, res, function () {
        res.redirect('/main');
      });
    });
  });
  
  // app.get('/auth/login', function(req, res) {
  //   res.render('login', { user : req.user });
  // });
  
  router.route('/auth/login')
  .post(function(req, res) {
    res.redirect('/main');
  })
  
  router.route('/auth/logout')
  .get(function(req, res) {
    req.logout();
    res.redirect('/');
  });
  
};