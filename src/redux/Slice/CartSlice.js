import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";



export const CartSlice= createSlice({
    name:"cart",
    initialState:{
        cart:[],
    },
    reducers:{
        addToCart:(state,action)=>{
            const presentItem = state.cart.some((item)=>item.id === action.payload.id)
            if(presentItem){
               state.cart= state.cart.map((item)=>item.id === action.payload.id ? {...item , qty:item.qty+1 } : item);
            }
            else{
                state.cart.push(action.payload)
            }
            toast.success(`Added ${action.payload.name}`);
        },
        removeToCart:(state,action)=>{
            state.cart=state.cart.filter((item)=>item.id !== action.payload)
            toast.error(`Removed from cart `);
        },
        incrementQty:(state,action)=>{
            state.cart=state.cart.map((item)=> item.id === action.payload ? {...item , qty:item.qty+1} : item )
        },
        decrementQty:(state,action)=>{
            state.cart=state.cart.map((item)=> item.id === action.payload? {...item , qty:item.qty-1} : item )
        },
        emptyArray : (state)=>{
            state.cart=[];
        }
        
    }
})
export const {addToCart, removeToCart,incrementQty,decrementQty,emptyArray}=CartSlice.actions;
export default CartSlice.reducer;