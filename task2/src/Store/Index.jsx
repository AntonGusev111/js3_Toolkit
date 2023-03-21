import { configureStore } from "@reduxjs/toolkit";
import PhotoReducer from "../Slices/PhotoReducer";


const store = configureStore({
    reducer: {
      photo:PhotoReducer,
    }
  });
  
  export default store;