const AuthenticationController = require('./controllers/authentication'),
  express = require('express'),
  passportService = require('./config/passport'),
  passport = require('passport');
const Assignments = require('./models/assignments');

// Middleware to require login/auth
const requireAuth = passport.authenticate('jwt', { session: false });
const requireLogin = passport.authenticate('local', { session: false });

module.exports = function (app) {
  // Initializing route groups
  const apiRoutes = express.Router();
  const authRoutes = express.Router();

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
      Assignments.create(req.body);
    });

  apiRoutes.route('/assignments/:id')
    .delete(function (req, res) {
      Assignments
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    });

  apiRoutes.route('/assignments')
    .get((req, res) => {
      console.log('api/assignments GET route recieved query:', req.query)
      Assignments.find(req.query)
        .then(dbModel => res.json(dbModel))
    });
};