import axios from 'axios';

const api = axios.create({
    baseURL: 'https://json-server-ex-gq2u.onrender.com',
    //baseURL: 'http://localhost:5000',
    //baseURL: 'https://site-pessoal-api-0f6p.onrender.com'
});

export default api;

