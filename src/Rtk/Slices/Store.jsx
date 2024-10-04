import { configureStore } from "@reduxjs/toolkit";
import  cartReducer  from "./CartSlice";
// import  userDetail  from "../Rtk/Slices/CartSlice";
export const store=configureStore({
    reducer:{
      cart: cartReducer
    }
})

