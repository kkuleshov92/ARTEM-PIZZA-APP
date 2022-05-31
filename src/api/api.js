import axios from "axios";

const server = process.env.REACT_APP_API_SERVER

export const serverLogin = (login, password) => {
  return axios.post(`${server}/api/login`, {
    login,
    password,
  })
}