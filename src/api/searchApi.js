import { axios } from "../utils/axios";

function searchMain(data) {
  return axios({
    url: "",
    method: "post",
    data,
  });
}

export default { searchMain };
