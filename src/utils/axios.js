import axios from "axios";

const service = axios.create({
  baseURL: "",
  timeout: 30000,
  withCredentials: true,
  headers: {
    token: window.localStorage.getItem("token"),
  },
  transformRequest: [
    (data) => {
      return JSON.stringify(data);
    },
  ],
  transformResponse: [
    (data) => {
      if (typeof data === "string") {
        data = JSON.parse(data);
      }
      return data;
    },
  ],
});

export { service as axios }