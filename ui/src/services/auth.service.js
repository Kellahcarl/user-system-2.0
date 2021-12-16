import axios from "axios";

const API_URL = "http://localhost:8081/api/auth/";

const register = (
  firstname,
  lastname,
  age,
  gender,
  isAdmin,
  email,
  password
) => {
  return axios.post(API_URL + "register", {
    firstname,
    email,
    gender,
    age,
    lastname,
    isAdmin,
    password,
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {
      
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};
