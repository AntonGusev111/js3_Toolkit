import { createAction, createSlice } from "@reduxjs/toolkit";

const incrementBy = createAction("incrementBy");
const decrementBy = createAction("decrementBy");

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state, action) => state = action.payload,
  },
});

export const { increment } = counterSlice.actions;
export { incrementBy, decrementBy };

export default counterSlice.reducer;