import axios from "axios";

export const forgotPasswordApi = async (email) => {
  const {
    data: { message },
  } = await axios.post(`http://localhost:8080/api/auth/forgot-password`, email);
  return message;
};

export const resetPasswordApi = async (data) => {
  const {
    data: { message },
  } = await axios.post(`http://localhost:8080/api/auth/reset-password`, data);
  return message;
};
