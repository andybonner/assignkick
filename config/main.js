module.exports = {  
  // Secret key for JWT signing and encryption
  'secret': 'code monkey',
  // Database connection information
  'database': process.env.MONGODB_URI || "mongodb://localhost/assignkick"
}