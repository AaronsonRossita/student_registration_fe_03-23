import axios from "axios";

const url = new URL("http://localhost:8080");

export const axiosConfig = {
    baseURL: url.toString()
}

axios.defaults.withCredentials = false;

export const axiosInstance = axios.create(axiosConfig);