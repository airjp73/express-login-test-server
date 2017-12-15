var nodemailer = require('nodemailer')
var Email = require('email-templates')
var path = require('path')

var transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: process.env.AUTH_TEST_EMAIL,
    pass: process.env.AUTH_TEST_EMAILPASS
  }
})

var emailOptions = {
  message: {
    from: "AaronP <aaron@bob.com>"
  },
  transport: transporter
}

module.exports = emailOptions
