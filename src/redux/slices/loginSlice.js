import { createSlice, current } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    userType: "employee",
    data: [],
    isLoggedIn: false,
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
      // console.log(current(state.data));
    },
    setUserType: (state, action) => {
      state.data = action.payload;
    },
    setisLoggedIn: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setloginData } = loginSlice.actions;
export default loginSlice.reducer;
