const express = require("express");
const router = express.Router();

const {
  getTasks,
  getTask,
  createTask,
  deleteTask,
  updateTask,
} = require("../controllers/tasks");

router.get("/:pid", getTasks);
router.get("/:pid/:tid", getTask);
router.post("/", createTask);
router.put("/delete", deleteTask);
router.put("/", updateTask);

module.exports = router;
