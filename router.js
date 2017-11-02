const AuthenticationController = require('./controllers/authentication'),
  express = require('express'),
  passportService = require('./config/passport'),
  passport = require('passport');
const Assignments = require('./models/assignments');
const User = require('./models/user');
const path = require('path');
const emailScheduler = require('./controllers/emailscheduler');
const nodemailer = require('nodemailer');

// Middleware to require login/auth
const requireAuth = passport.authenticate('jwt', { session: false });
const requireLogin = passport.authenticate('local', { session: false });

module.exports = function (app) {
  // Initializing route groups
  const apiRoutes = express.Router();
  const authRoutes = express.Router();

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'assignkick.qwad@gmail.com',
      pass: 'assignkick'
    }
  });

  //=========================
  // Auth Routes
  //=========================

  // Set auth routes as subgroup/middleware to apiRoutes
  apiRoutes.use('/auth', authRoutes);

  // check auth
  apiRoutes.get('/protected', requireAuth, (req, res) => {
    res.send({ content: 'The protected test route is functional!' });
  });

  // Registration route
  authRoutes.post('/register', AuthenticationController.register);

  // Login route
  authRoutes.post('/login', requireLogin, AuthenticationController.login);

  // Set url for API group routes
  app.use('/api', apiRoutes);

  // NB '/api' portion of route is already being passed in, so this equals '/api/add'
  apiRoutes.route('/add')
    .post(function (req, res) {
      console.log('route received as req.body:', req.body);
      
      // schedule reminder emails
      emailScheduler(req, res);
      
      // send confirmation email immediately
      User.findById({_id: req.body.user }, function(err, dbUser) {
        console.log(dbUser);
      })

      var mailOptions = {
        from: '"AssignKick" assignkick@gmail.com',
        to: req.body.email,
        subject: `Thanks for creating your assignment "${req.body.title}"`,
        text: `Hey ${req.body.firstName}!
        
        Thanks for letting AssignKick keep track of your assignment: ${req.body.title}. 
        
        Your assigment is due on the ${req.body.end}. You'll see some reminder emails from us starting a week before then.
        
        Go for it!
        
        - AssignKick`
      };

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    });

  apiRoutes.route('/assignments/:id')
    .delete(function (req, res) {
      Assignments
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    });

  apiRoutes.route('/user-assignments/:id')
    .get((req, res) => {
      // upon login, user will visit this route
      User.findById(req.params.id)
        .populate('assignments')
        .then(dbModel => res.json(dbModel))
    });

  apiRoutes.route('/user-update/:id')
    .put((req, res) => {
      console.log('user-update PUT route received:', req.body);
      const userID = req.params.id;
      User.findById(userID, function(err, dbUser) {
        console.log('dbUser:', dbUser);
        dbUser.assignments.push(req.body.assignmentID);
        console.log('dbuser.assignments:', dbUser.assignments);
        dbUser.save();
      });
    });

  app.get('*', function (request, response){
    response.sendFile(path.join(__dirname, './client/build/index.html'));
  });
};