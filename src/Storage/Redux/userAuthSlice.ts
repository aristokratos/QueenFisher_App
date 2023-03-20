import { createSlice } from "@reduxjs/toolkit";
import { userModel } from "../../Interfaces";


const initialState:userModel = {
   fullName: "", 
  phone: "",
  email: "",
  password: "",
  confirmPassword:"" 
};

export const userAuthSlice = createSlice({
  name: "userAuth",
  initialState: initialState,
  reducers: {
    setLoggedInUser: (state, action) => {
       state.fullName = action.payload.fullName; 
      state.phone = action.payload.phone;
      state.email = action.payload.email;
      state.password = action.payload.password;
       state.confirmPassword = action.payload.confirmPassword; 
    },
  },
});

export const { setLoggedInUser } = userAuthSlice.actions;
export const userAuthReducer = userAuthSlice.reducer;