import axios from "axios";

const baseURL = window.location.host === 'localhost:8000'?'http://localhost:3000/api':'https://andrew-zachary-dev.herokuapp.com/api';
const axiosClient = axios.create({
    baseURL,
    withCredentials: true
});

export default axiosClient;