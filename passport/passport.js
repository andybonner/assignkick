const bCrypt = require('bcrypt-nodejs');

module.exports = function(passport, user) {
  var User = user;
  //  local signup
  var LocalStrategy = require('passport-local').Strategy;
  passport.use('local-signup', new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done) {
      var generateHash = function (password) {
        return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
      };
      User.findOne({
        where: {
          email: email
        }
      }).then(function (user) {
        if (user) {
          return done(null, false, {
            message: 'That email is already taken'
          });
        } else {
          var userPassword = generateHash(password);
          var data =
          {
            firstName: req.body.firstname,
            lastName: req.body.lastname,
            email: email,
            password: userPassword
          };
          User.create(data).then(function (newUser, created) {
            if (!newUser) {
              return done(null, false);
            }
            if (newUser) {
              return done(null, newUser);
            }
          });
        }
      });
    }
  )
);
}