import axios from "axios";

const api = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL ||
    "https://web-developement-backend.vercel.app/v1",
    // "http://localhost:3001/v1",
  timeout: 15000,
});

//  Attach Token Automatically
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);


api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!error.response) {
      console.error("Network error");
    } else if (error.response.status === 401) {
      console.warn("Unauthorized! Redirecting...");
      // logout logic here
    }
    return Promise.reject(error);
  }
);

export default api;
