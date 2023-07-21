const express = require("express");
const router = express.Router();
const taskRoutes = require("./taskRoutes");
const cors = require("cors");

const corsOption = {
  origin: "http://localhost:3001", // 許可したいオリジンを指定
  credentials: true, // レスポンスヘッダーにAccess-Control-Allow-Credentialsを追加。ユーザー認証等を行う場合は、これがないとブラウザがレスポンスを捨ててしまうそう。
};
router.use("/task", cors(corsOption), taskRoutes);

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
