const router = require("express").Router();
const taskController = require("../controllers/taskController");
const cors = require("cors");
const multer = require("multer");

const upload = multer();

const corsOption = {
  origin: "http://localhost:3001", // 許可したいオリジンを指定
  credentials: true, // レスポンスヘッダーにAccess-Control-Allow-Credentialsを追加。ユーザー認証等を行う場合は、これがないとブラウザがレスポンスを捨ててしまうそう。
};
router.get("/", cors(corsOption), taskController.read);
router.post("/", cors(corsOption), upload.none(), taskController.create);
router.put("/:id", taskController.update);
router.delete("/:id", taskController.delete);

module.exports = router;
