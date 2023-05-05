import { configureStore } from "@reduxjs/toolkit";
import bucketSlice from "./bucket.reducer";
import userSlice from "./user.reducer";
export const store = configureStore({
  reducer: {
    bucket: bucketSlice,
    userinfo: userSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
