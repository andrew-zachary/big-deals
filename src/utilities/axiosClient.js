import axios from "axios";

const baseURL = window.location.host === 'localhost:8000'?'http://localhost:3000/api':'https://andrew-zachary-dev.onrender.com/api';
const axiosClient = axios.create({
    baseURL,
    withCredentials: true
});
export {axiosClient};