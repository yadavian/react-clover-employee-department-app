import { createSlice, current } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
  name: "home",
  initialState: {
    activeUserType: "employee",
  },
  reducers: {
    setActiveUserType: (state, action) => {
      state.activeUserType = action.payload;
      // console.log(current(state.data));
    },
  },
});

export const { setActiveUserType } = homeSlice.actions;
export default homeSlice.reducer;
