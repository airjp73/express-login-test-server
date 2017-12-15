var mongoose = require("mongoose")

var userSchema = new mongoose.Schema({
  password: {type: String, select: false},
  confirmEmailToken: {type: String, select: false},
  resetPasswordToken: {type: String, select: false},
  resetPasswordExpires: {type: Date, select: false},

  email: {type: String, select: false},
  emailConfirmed: {type: Boolean, default: false}
})

module.exports = mongoose.model("User", userSchema)


/*
userSchema.statics.findUserFromRequest = function(field = null, projection = "") {

  return async (req, res, next) => {
    try {

      var select = {}
      if (field) {
        if (!req.body[field])
          return res.sendStatus(404)
        select[field] = req.body[field] || ""
      }
      else if (req.user)
        select = {_id: req.user._id}
      else
        throw new Error("Cannot find user -- No selection or invalid selection")

      req.user = await this.findOne(select, projection)
      if (!req.user)
        return res.sendStatus(404)

      return next()
    }
    catch (err) { next(err) }

  }
}
*/
