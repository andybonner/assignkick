/**
 * Mail Service
 */
var nodemailer = require('nodemailer');
var q = require("q");
var SMTPSetup = {
  sender: "AssignKick",
  email: "undeleap@gmail.com",
  password: "uneleap123+"
};


module.exports = function sendEmailController(subject, message, To, cc, bcc) {
  var deferred = q.defer();
  var fromAddress = SMTPSetup.sender + "<" + SMTPSetup.email + ">";
  var transport = null;
  var SMPTConfigObj = {
    auth: {
      user: SMTPSetup.email,
      pass: SMTPSetup.password
    }
  };

  SMPTConfigObj.service = 'gmail';

  transport = nodemailer.createTransport(SMPTConfigObj);

  console.log('Sending Mail from Emailer!');
  if (Array.isArray(To)) {
    To = To.join("; ");
  }
  var message = {
    // sender info
    from: fromAddress,
    // Comma separated list of recipients
    to: To,
    // Subject of the message
    subject: subject,
    // HTML body
    html: message

  };

  if (cc) {
    if (Array.isArray(cc)) {
      cc = cc.join(";");
    }
    message.cc = cc;
  }
  if (bcc) {
    if (Array.isArray(bcc)) {
      bcc = bcc.join(";");
    }
    message.bcc = bcc;
  }

  transport.sendMail(message, function (error, response) {
    if (error) {
      console.log("email error");
      console.log(error);
      deferred.reject(error);
    }
    else {
      console.log('Message sent successfully!');
      deferred.resolve(response);
    }
  });

  // if you don't want to use this transport object anymore, uncomment following line
  transport.close(); // close the connection pool
  return deferred.promise;
}


