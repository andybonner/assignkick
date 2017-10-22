const path = require("path");
const router = require("express").Router();
// const apiRoutes = require("./api");
const authRoutes = require('./authRoutes');

// API Routes
// router.use("/api", apiRoutes);
// Auth routes
router.use('/auth', authRoutes);
  
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