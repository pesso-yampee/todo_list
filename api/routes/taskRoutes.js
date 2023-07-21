const router = require("express").Router();
const taskController = require("../controllers/taskController");
const cors = require("cors");
const multer = require("multer");

const upload = multer();

router.get("/", taskController.read);
router.post("/", upload.none(), taskController.create);
router.put("/:id", taskController.update);
router.delete("/:id", taskController.delete);

module.exports = router;
