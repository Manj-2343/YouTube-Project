import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
    //   state = { ...action.payload, ...state };
    state = Object.assign(state,action.payload)
    },
  },
});
export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;
/**
 * Cache:
 * time complexity tro search in array = O(n)
 * time complexity tro search in Object = O(1)
 * ex-1:[i,ip,iph,iphone]
 * ex-2:{
 * i:
 * ip:
 * iph:
 * iphone:
 * }
 * new Map();
 */
