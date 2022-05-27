import { axios } from "../utils/axios";

function verify() {
  return axios({
    url: "",
    method: "",
  });
}

function login(data) {
  return axios({
    url: "http://127.0.0.1:4523/mock/682629/loginApiTest",
    method: "post",
    data,
  });
}

function register(data) {
  return axios({
    url: "http://127.0.0.1:4523/mock/682629/registerApiTest",
    method: "post",
    data,
  });
}

export const userApi = { verify, login, register };
