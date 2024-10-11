// Auth.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// إعدادات Axios
axios.defaults.baseURL = 'http://localhost:8080'; // تأكد من صحة عنوان الـ API الخاص بك

// الحالة الابتدائية
const initialState = {
    user: null,
    token: localStorage.getItem('token') || null,
    loading: false,
    error: null,
};

// تعريف registerUser
export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async (userData, { rejectWithValue }) => {
        try {
            const response = await axios.post('/api/register', userData);
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

// تعريف loginUser
export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (credentials, { rejectWithValue }) => {
        try {
            const response = await axios.post('/api/login', credentials);
            const { token, user } = response.data;

            // Save token to localStorage
            localStorage.setItem('token', token);

            return { token, user };
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// تعريف fetchUser
export const fetchUser = createAsyncThunk(
    'auth/fetchUser',
    async (_, { getState, rejectWithValue }) => {
        try {
            const { auth } = getState();
            const response = await axios.get('/api/me', {
                headers: {
                    Authorization: `Bearer ${auth.token}`,
                },
            });
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

// إنشاء Slice
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout(state) {
            state.user = null;
            state.token = null;
            localStorage.removeItem('token');
        },
    },
    extraReducers: (builder) => {
        // registerUser
        builder.addCase(registerUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload.user;
            state.token = action.payload.token;
            localStorage.setItem('token', action.payload.token);
        });
        builder.addCase(registerUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload.message || 'Registration failed';
        });

        // loginUser
        builder.addCase(loginUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload.user;
            state.token = action.payload.token;
        });
        builder.addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload.message || 'Login failed';
        });

        // fetchUser
        builder.addCase(fetchUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
        });
        builder.addCase(fetchUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload.message || 'Failed to fetch user';
        });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
