import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";

export interface BucketState {
  items: Array<any>;
}

const initialState: BucketState = {
  items: [],
};

export const bucketSlice = createSlice({
  name: "bucket",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<any>) => {
      let temp = action.payload;
      state.items.push(temp);
    },
    clear: (state) => {
      state.items = [];
    },
    increaseNum: (state, action: PayloadAction<any>) => {
      state.items = action.payload;
    },
    removeItem: (state, action: PayloadAction<any>) => {
      state.items = action.payload;
    },
  },
});

export const { add, increaseNum, removeItem } = bucketSlice.actions;
export const bucketItems = (state: RootState) => state.bucket.items;
export const bucketCount = (state: RootState) => state.bucket.items.length;

export default bucketSlice.reducer;
