import axios from "axios";

// TODO: add testing
const client = axios.create({
  baseURL: import.meta.env.VITE_BACKOFFICE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default client;
