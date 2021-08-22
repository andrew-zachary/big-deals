import axios from "axios";

// export const http_client = axios.create({
//   baseURL: "https://persona-server-01.herokuapp.com",
//   timeout: 6000,
// });

export const http_client = axios.create({
  baseURL: "http://dockers:8080",
  timeout: 6000,
});