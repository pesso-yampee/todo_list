const db = require('../models')

module.exports = {
  read: async (req, res, next) => {
    try {
      const result = await db.Users.find({
        email: req.body.email,
        password: req.body.password,
      })
      res.send(result)
    } catch (err) {
      res.staus(500).send(err)
    }
  },
}
