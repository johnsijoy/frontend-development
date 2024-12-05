import axios from "axios";

// Axios instance for making API requests
const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // API URL from .env file
});

export default instance;
