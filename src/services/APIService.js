import axios from "axios";

// arquivo de configuração para integração com o backend

const api = axios.create({
    baseURL: "http://localhost:8080/",
});

api.interceptors.request.use(config => {
    const token = localStorage.getItem("token");

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
})

export default api;