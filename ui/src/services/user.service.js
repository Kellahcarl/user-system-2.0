import axios from "axios";
import authHeader from "./auth-header";

const PROJECT_URL = "http://localhost:8080/api/";
const TASK_URL = "http://localhost:8080/api/";

const getProjectBoard = () => {
  return axios.get(PROJECT_URL + "projects", { headers: authHeader() });
};

const getTaskBoard = () => {
  return axios.get(TASK_URL + "tasks", { headers: authHeader() });
};

export default {
  getProjectBoard,
  getTaskBoard,
};
