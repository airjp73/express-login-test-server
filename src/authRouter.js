
module.exports = (expressLogin) => {
  var authRouter = expressLogin.createAuthRouter()

  authRouter.route("/testRoute").get(
    (req, res) => {
      res.sendStatus(200)
    }
  )

  return authRouter
}
