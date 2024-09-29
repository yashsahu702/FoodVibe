import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "./Slice/CategorySlice";
import CartSlice from "./Slice/CartSlice";
import SearchSlice from "./Slice/SearchSlice";
 const Store=configureStore({
    reducer:{
        category:CategorySlice,
        cart:CartSlice,
        search:SearchSlice,
    },
});
export default Store;