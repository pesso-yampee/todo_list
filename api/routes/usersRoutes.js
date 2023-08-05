const express = require('express')
const usersController = require('../controllers/usersController')
const router = express.Router()

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource')
})
router.post('/', usersController.read)

module.exports = router
