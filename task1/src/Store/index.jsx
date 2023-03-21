import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Slices/Counter";


const store = configureStore({
  reducer: {
    counter: counterReducer,
  }
});

export default store;