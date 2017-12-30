//test mailer module for testing

var sinon = require('sinon')

module.exports = {
  init: sinon.spy(),
  sendEmail: sinon.spy(),
  reset() {
    init.reset()
    sendEmail.reset()
  }
}
