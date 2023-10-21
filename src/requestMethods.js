import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const BASE_URL = "https://dressup-backend.onrender.com/api/";



const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : "";
const TOKEN = user?.token;


export const publicRequest = axios.create({
    baseURL: BASE_URL,
});


export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` },
});