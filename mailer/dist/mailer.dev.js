"use strict";

var nodemailer = require('nodemailer');

var mailconfig = {
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: 'birdie.dibbert0@ethereal.email',
    pass: 'u4WGheQPbCmAKTx5Wn'
  }
};
module.exports = nodemailer.createTransport(mailconfig); //Esta es una cuenta de correo ficti que se hace con ethereal mail
//# sourceMappingURL=mailer.dev.js.map
