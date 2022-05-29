import { axios } from "../utils/axios";

function navGet() {
  return axios({
    url: "http://127.0.0.1:4523/mock/848313/navApiTest",
    method: "post",
  });
}

function listGet(data) {
  return axios({
    url: "http://127.0.0.1:4523/mock/848313/listApiTest",
    method: "post",
    data,
  });
}

export default { navGet, listGet };
