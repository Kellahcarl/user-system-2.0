import axios from "axios";

export const getTasksApi = async (id) => {
  const { data } = await axios.get(`http://localhost:5050/api/tasks/${id}`);
  return data.tasks;
};

export const addTaskApi = async (task) => {
  const {
    data: { message },
  } = await axios.post("http://localhost:5050/api/tasks", task);
  return message;
};
