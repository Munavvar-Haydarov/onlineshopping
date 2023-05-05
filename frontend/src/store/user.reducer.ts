import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";
import { notification } from "antd";

import axios from "axios";
export interface UserState {
  userinfo: {
    userName: string;
    userEmail: string;
    islogined: boolean;
  };
}

export const login = createAsyncThunk<any, any>("auth/login", async (data) => {
  const response = await axios.post("/api/user/login", {
    data,
    headers: {
      "ngrok-skip-browser-warning": "any",
      "Content-Type": "application/json",
    },
  });
  return response?.data;
});
// export const productsViews = createAsyncThunk<any, any>(
//   "products/views"
//   // async function name(params: type) {}
// );
const initialState: UserState = {
  userinfo: {
    userName: "",
    userEmail: "",
    islogined: false,
  },
};
export const userSlice = createSlice({
  name: "userinfo",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    signup: (state, action: PayloadAction<any>) => {
      axios
        .post("/api/user/signup", {
          headers: {
            "ngrok-skip-browser-warning": "any",
            "Content-Type": "application/json",
          },
          data: action.payload,
        })
        .then((response) => {
          notification.open({
            message: response.data.message,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    clear: (state) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      notification.success({
        message: "success login",
      });
      state.userinfo = action.payload;
    });
  },
});

export const { signup } = userSlice.actions;

export const userinfo = (state: RootState) => state.userinfo;
// export const isLoggedIn = (state: RootState) => state.userinfo.;
// export const bucketItems = (state: RootState) => state.bucket.items;
// export const bucketCount = (state: RootState) => state.bucket.items.length;

export default userSlice.reducer;
