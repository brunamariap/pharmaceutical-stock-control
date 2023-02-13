import axios from "axios";

const api = axios.create({
    baseURL: 'http://10.112.3.230:3000/'
});

export default api;