import axios from 'axios';

// Create an Axios instance
const api = axios.create({
    baseURL: 'https://your-api-base-url.com',
    timeout: 10000,
});

// Request interceptor
api.interceptors.request.use(
    (config) => {
        // Example: Add Authorization header if token exists
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Response interceptor
api.interceptors.response.use(
    (response) => response,
    (error) => {
        // Example: Handle 401 Unauthorized globally
        if (error.response && error.response.status === 401) {
            // Handle unauthorized access (e.g., redirect to login)
        }
        return Promise.reject(error);
    }
);

export default api;