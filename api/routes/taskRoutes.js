const router = require("express").Router();
const taskController = require("../controllers/taskController");
const cors = require("cors");

router.get(
  "/",
  cors({
    origin: "http://localhost:3001", // 許可したいオリジンを指定
    credentials: true, // レスポンスヘッダーにAccess-Control-Allow-Credentialsを追加。ユーザー認証等を行う場合は、これがないとブラウザがレスポンスを捨ててしまうそう。
  }),
  taskController.read
);
router.post("/", taskController.create);
router.put("/:id", taskController.update);
router.delete("/:id", taskController.delete);

module.exports = router;
