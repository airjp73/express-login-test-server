"use strict"

var chai = require('chai')
var expect = chai.expect
var sinon = require('sinon')

var express = require('express')
var router = require('./authRouter.js')

describe("authRouter", () => {
  it("should export an express router", () => {
    expect(Object.getPrototypeOf(authRouter)).to.equal(express.Router)
  })
})
