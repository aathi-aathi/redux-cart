import { configureStore } from "@reduxjs/toolkit";
import productReducer from './productSlice'
const store = configureStore({
    reducer:{
    product:productReducer
    },
    devTools:true
})
export default store