import axios from 'axios';

const baseURL = window.location.host.includes('localhost')?'http://localhost:3000/api':'https://andrew-zachary-dev.onrender.com/api';
const axiosClient = axios.create({
    headers: {
        'x-app-key': '7c6dd89f29bb694039d8023db780597666e695c238a5b10ef30f4ed04b73ce35'
    },
    baseURL,
    withCredentials: true
});
export {axiosClient};