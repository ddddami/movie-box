import axios from 'axios';

const AUTH_TOKEN = import.meta.env.VITE_API_KEY
const axiosIntance = axios.create({baseURL: 'https://api.themoviedb.org/3',headers: { Authorization: "Bearer " + AUTH_TOKEN }})

export default axiosIntance;