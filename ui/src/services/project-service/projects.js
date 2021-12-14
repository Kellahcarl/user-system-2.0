import axios from "axios";

export const getProjects = async (uid) => {
  const { data } = await axios.get(`http://localhost:5050/api/projects/${uid}`);
  return data.projects;
};

export const addProject = async (project) => {
  const {
    data: { message },
  } = await axios.post("http://localhost:5050/api/projects", project);
  return message;
};

export const updateProjectApi = async (project) => {
  const {
    data: { message },
  } = await axios.put("http://localhost:5050/api/projects", project);
  return message;
};

export const getProjectApi = async (id,uid) => {
  const { data } = await axios.get(`http://localhost:5050/api/projects/${id}/user/${uid}`);
  return data.project;
};

export const getAssignedTeamApi = async (id) => {
  const { data } = await axios.get(`http://localhost:5050/api/projects/assign/${id}`);
  return data.team;
};

export const assignProjectApi = async (body) => {
  const { data } = await axios.post(
    'http://localhost:5050/api/projects/assign',
    body
  );
  return data.message;
};
