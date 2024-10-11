import { configureStore } from "@reduxjs/toolkit";
import  cartReducer  from "./CartSlice";
import favReducer from './favSlice'; // Import the favorite slice

// import  userDetail  from "../Rtk/Slices/CartSlice";
export const store=configureStore({
    reducer:{
      cart: cartReducer ,  
      favorites: favReducer, // Add it here

    }
})

