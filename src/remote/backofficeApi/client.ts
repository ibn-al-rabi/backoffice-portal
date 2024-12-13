import axios from "axios";

const client = axios.create({
  baseURL: import.meta.env.VITE_BACKOFFICE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default client;