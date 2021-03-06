import { axios } from "../utils/axios";

function messageGet(data) {
  return axios({
    url: "http://127.0.0.1:4523/mock/848313/questionMessageApiTest",
    method: "post",
    data,
  });
}

function codeGet(data) {
  return axios({
    url: "",
    method: "",
    data,
  });
}

function codeSubmit(data) {
  return axios({
    url: "https://lut/OnlineIDE_Judge/",
    method: "post",
    data,
  });
}

export const questionApi = { messageGet, codeGet, codeSubmit };
