"use strict"

var chai = require('chai')
var expect = chai.expect


var email = require('./index.js')

describe("emails", () => {
  it("exports should contain from address", () => {
    expect(email.message.from).to.be.a('string')
  })

  it("exports should contain a transport", () => {
    expect(email.transport).to.be.an('object')
  })
})
