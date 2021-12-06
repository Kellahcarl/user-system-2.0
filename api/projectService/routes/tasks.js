const express = require("express")
const router = express.Router()

const {getTasks, getTask, createTask} = require("../controllers/tasks")

router.get("/:pid", getTasks);
router.get("/:pid/:tid", getTask);
router.post("/", createTask);



module.exports = router;