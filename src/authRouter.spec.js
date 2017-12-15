"use strict"

var chai = require('chai')
var expect = chai.expect
var sinon = require('sinon')

var express = require('express')

var authRouter = require('./authRouter.js')
var router = {
  route: sinon.stub(),
  get: sinon.stub()
}
router.route.returns(router)
router.get.returns(router)

var mockExpressLogin = {
  createAuthRouter: sinon.stub().returns(router)
}

describe("authRouter", () => {
  it("should call createAuthRouter on arg and return result", () => {
    var test = authRouter(mockExpressLogin)

    sinon.assert.calledOnce(mockExpressLogin.createAuthRouter)
    expect(test).to.equal(router)
  })
})
