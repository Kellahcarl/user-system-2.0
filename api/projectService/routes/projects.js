const express = require("express");
const router = express.Router();

const {
  getProjects,
  getProject,
  createProject,
  assignProject,
  getAssignProject,
  updateProject,
  deleteProject,
  completeProject,
} = require("../controllers/projects");

router.get("/:uid", getProjects);
router.post("/", createProject);
router.put("/", updateProject);
router.get("/assign/:id", getAssignProject);
router.post("/assign", assignProject);
router.put("/delete", deleteProject);
router.get("/:pid/user/:uid", getProject);
router.get("/:pid/user/:uid", getProject);
router.get("/complete", completeProject);

module.exports = router;
