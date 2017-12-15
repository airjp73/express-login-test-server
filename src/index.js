"use strict"

//required modules
var express       = require("express")
var mongoose      = require('mongoose')
var session       = require('express-session')
var bodyParser    = require('body-parser')
var cookieParser  = require('cookie-parser')
var http          = require('http')

//Environment Variables
require('env2')(__dirname + "/.env")

//User model and email options
var userModel = require('./models/user.js')
var emailOptions = require('./emails')

//express-login
var expressLogin = require('express-login')
var expressLoginLocal = require('express-login-local')

/*
  Express configuration
*/
const app = express()

app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(session({
  secret : process.env.AUTH_TEST_SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
  cookie: {
    secure: false
  }
}))

/*
    Connect to DB
*/
mongoose.Promise = global.Promise
mongoose.connect(process.env.AUTH_TEST_DB_URL)
  .then(() => {
    console.log("Database is connected")
  })
  .catch((err) => {
    console.log("Can not connect to the database" + err)
  })

//api routes
var authOptions = {
  userModel,
  emailOptions
}
expressLogin.use(expressLoginLocal)
//var authRouter = require("./authRouter.js")(expressLogin)

app.use("/auth", expressLogin.router)
//app.use("/test", authRouter)

app.use((err, req, res, next) => {
  console.log(err)
  res.sendStatus(500)
})



/*
  Start listening
*/
var port = process.env.AUTH_TEST_PORT || 3000
module.exports = app.listen(port, function() {
  console.log("Listening on port " + port)
})
