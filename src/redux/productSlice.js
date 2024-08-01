import { createSlice } from "@reduxjs/toolkit";

const productSlice=createSlice({
    name:'products',
    initialState: {
        products:[]
    },
    reducers:{
       getProducts:(state,action)=>{
            state.products = action.payload
    },
    addOuantity:(state,action)=>{
        const index = state.products.findIndex((product)=> product.id == action.payload)
        console.log(index)
        const item = state.products[index]
        console.log(item.quantity)
        item.quantity +=1
        

        
        
    },
    decOuantity:(state,action)=>{
        const index = state.products.findIndex((product)=> product.id == action.payload)
        const item = state.products[index]
        if(item.quantity > 1)
        item.quantity-= 1
    console.log(item.quantity)
        
        
    }
}})
export const {getProducts,addOuantity,decOuantity} = productSlice.actions;
export default productSlice.reducer