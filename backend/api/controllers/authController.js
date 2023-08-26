const db = require('../models/index')

module.exports = {
  read: async (req, res, next) => {
    try {
      // const user = req.body

      // if (!user.email || !user.password) {
      //   throw new Error('USERS_INVALID_VALUE')
      // }
      
      const result = await db.Auth
      
      if (!result) {
        throw new Error('USERS_NOT_EXISTS_USER')
      }

      res.status(200).send('成功')
    } catch (err) {
      res.staus(500).send(err)
    }
  },
}
