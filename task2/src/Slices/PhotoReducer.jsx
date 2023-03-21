import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const photoSlice=createSlice({
    name: "photoSlice",
    initialState,
    reducers: {
        addPhoto: (state, action) =>{
            const {url} = action.payload;
            state.push(url)
        }
    }
})

export const {addPhoto} = photoSlice.actions;

export default photoSlice.reducer;
  