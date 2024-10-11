import axios from 'axios';
import store from './Store';
import { logout } from './Slices/Auth';

// Set the base URL for Axios (ensure it's the same as in AuthSlice)
axios.defaults.baseURL = 'http://localhost:8080'; // Replace with your backend URL

// Request interceptor to add token to headers
axios.interceptors.request.use(
    (config) => {
        const state = store.getState();
        const token = state.auth.token;
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Response interceptor to handle errors globally
axios.interceptors.response.use(
    (response) => response,
    (error) => {
        // If unauthorized, logout the user
        if (error.response && error.response.status === 401) {
            store.dispatch(logout());
            // Optionally, redirect to login page
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);
