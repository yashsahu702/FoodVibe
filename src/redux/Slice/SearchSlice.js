import { createSlice } from "@reduxjs/toolkit";
import FoodData from "../../data/foodData";
export const SearchSlice = createSlice({
    name:"search",
    initialState:{
        search:"",
    },
    reducers:{

        setSearchItem : (state,action) => {
            state.search=action.payload 
        },       
    },
})
export const {setSearchItem}=SearchSlice.actions;
export default SearchSlice.reducer;