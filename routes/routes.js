const path = require("path");
const router = require("express").Router();
const authRoutes = require('./authRoutes');
const assignRoutes = require('./assignRoutes');

// API Routes
// Auth routes
router.use('/auth', authRoutes);

// Assignment routes
router.use('/api', assignRoutes);

// test
router.route('/foo')
.get(function(req, res, next) {
  res.status(200).send('bar');
});

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;