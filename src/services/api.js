import axios from "axios";

const api = axios.create({
    baseURL: 'http://10.112.4.202:3000/'
});

export default api;