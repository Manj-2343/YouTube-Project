import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHART } from "./constant";

const chartSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.splice(OFFSET_LIVE_CHART, 1);
      state.messages.push(action.payload);
    },
  },
});
export const { addMessage } = chartSlice.actions;
export default chartSlice.reducer;
