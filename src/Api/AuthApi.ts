import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://queen-fisher-api.onrender.com/api",
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (userData) => ({
        url: "Auth/Register",
        method: "POST",
         headers: {
           "Content-type": "application/json",
         },
        body: userData,
      }),
     }),
     loginUser: builder.mutation({
         query: (userCredentials) => ({
          url: "Auth/Login",
           method: "POST",
          headers: {
             "Content-type": "application/json",
           },
         body: userCredentials,
        }),       }),
    }),
  });

   export const { useRegisterUserMutation, useLoginUserMutation } = authApi;
   export default authApi;

/* import React, {createContext} from "react";
import { apiPost } from "../utils/api/axios";
import { Toast } from "react-toastify/dist/components";

export const dataContext = createContext([]);

const DataProvider = {children: any} => {
    const registerConfig = async (formData: any) => {
        try{
            const registerData = {
                firstName: formData.firstName,
                email: formData.email,
                password: formData.password,
                confirm_password: formData.confirm_password,
                phone: formData.phone,
            };
            await apiPost('/Auth/register', registerData).then((res) => {
                console.log(res.data);
                Toast.success(res.data.message);
                localStorage.setItem("signature", res.data.signature);
            })
        }catch (err) {
            console.log(err)
            Toast.error(err.response.data.Error)
        }
    }
    return (
      <dataContext.Provider>
      {children}
      </dataContext.Provider>

    )
} */