const express = require("express")
const router = express.Router()

const {getProjects, getProject, createProject, assignProject, getAssignProject, updateProject} = require("../controllers/projects")

router.get("/:uid", getProjects);
router.post("/", createProject);
router.put("/", updateProject);
router.get("/assign/:id", getAssignProject);
router.post("/assign", assignProject);

router.get("/:pid/user/:uid", getProject);



module.exports = router;