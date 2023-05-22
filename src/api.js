import axios from 'axios';

const api = axios.create({
    baseURL: 'https://json-server-ex-gq2u.onrender.com',
});

export default api;

