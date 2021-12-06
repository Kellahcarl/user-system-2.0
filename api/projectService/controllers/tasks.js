const db = require("../database");
const { v4: uuidv4 } = require("uuid");
const { taskValidator } = require("../helpers/taskValidator");
const parser = require("../helpers/parser");

module.exports = {
  getTasks: async (req, res) => {
    const { pid } = req.params;
    try {
      let result = await db.exec("getTasks", { project_id: pid });
      const tasks = parser(result);
      res.status(200).json({tasks});
    } catch (error) {
      if (error.message) return res.status(500).json(error);
      res.status(404).json(error);
    }
  },
  getTask: async (req, res) => {
    const { pid, tid } = req.params;
    try {
      let result = await db.exec("getTask", {
        project_id: pid,
        task_id: tid,
      });
      const task = parser(result, true);
      res.status(200).json({task});
    } catch (error) {
      if (error.message) return res.status(500).json(error);
      res.status(404).json(error);
    }
  },
  createTask: async (req, res) => {
    const { error } = taskValidator(req.body);
    if (error)
      return res
        .status(400)
        .send({ success: false, message: error.details[0].message });

    const userResult = await db.exec("getUser", {
      userId: req.body.user_id,
    });
    const projectResult = await db.exec("getProjects", {
      project_id: req.body.project_id,
      user_id: req.body.user_id,
    });
    if (!userResult.recordset[0])
      return res.status(400).send({ message: "invalid user_id. " });

    if (!projectResult.recordset[0])
      return res.status(400).send({ message: "invalid project. " });

    const {
      name,
      user_id,
      project_id,
      duration,
      start_date,
      end_date,
      description,
    } = req.body;
    const id = uuidv4();
    try {
      await db.exec("createTask", {
        id,
        name,
        user_id,
        project_id,
        duration,
        start_date: new Date(start_date),
        end_date: new Date(end_date),
        description
      });
      res.send({ message: "Task created successfully" });
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ message: "Internal Server Error" });
    }
  },
};
