const express = require("express");
const router = express.Router();

const {
  getTasks,
  getTask,
  createTask,
  deleteTask,
  updateTask,
  assignTask,
  getAssignTask,
  completeTask,
} = require("../controllers/tasks");

router.get("/:pid", getTasks);
router.get("/:pid/:tid", getTask);
router.post("/", createTask);
router.put("/delete", deleteTask);
router.put("/complete", completeTask);
router.put("/", updateTask);
router.post("/assign", assignTask);
router.get("/assign/:id", getAssignTask);

module.exports = router;
