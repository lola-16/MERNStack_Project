import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Slices/Auth';
import cartReducer from './Slices/CartSlice';
import './axiosSetup'; 

const Store = configureStore({
    reducer: {
        auth: authReducer,
        cart: cartReducer,
        // Add other reducers here if needed
    },
});

export default Store;
