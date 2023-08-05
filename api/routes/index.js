const express = require('express')
const router = express.Router()
const taskRoutes = require('./taskRoutes')
const usersRoutes = require('./usersRoutes')
const cors = require('cors')

const corsOption = {
  origin: 'http://localhost:3001', // 許可したいオリジンを指定
  credentials: true, // レスポンスヘッダーにAccess-Control-Allow-Credentialsを追加。ユーザー認証等を行う場合は、これがないとブラウザがレスポンスを捨ててしまうそう。
}
router.use('/task', cors(corsOption), taskRoutes)
router.use('/users', cors(corsOption), usersRoutes)

module.exports = router
