import { createSlice,nanoid } from "@reduxjs/toolkit";
import dom from "./Jsondata";
let initialState = {
    cart:[],
    productdata:dom,
    toggle:false
} 

const cartSlice =createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
         state.cart.push(action.payload)    
        },
        Toggle:(state,action)=>{
           state.toggle = action.payload
        },
    }
}) 

export const {addToCart,Toggle} = cartSlice.actions;
export default cartSlice.reducer;