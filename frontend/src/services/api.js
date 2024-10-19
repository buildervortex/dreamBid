import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5189/api/v1",
    timeout: 10000,
    validateStatus: function () {
        return true;
    }
})

API.interceptors.response.use(
    response => {
        const token = response.headers["Authorization"];
        if (token) {
            localStorage.setItem("jwtToken", token);
        }
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
)

API.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("jwtToken");
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

export default API;