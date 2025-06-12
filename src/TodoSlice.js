import { createSlice } from "@reduxjs/toolkit";

const Todoslice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, comp: false });
    },
    comp: (state, action) => {
      const val = state.find((list) => list.text === action.payload);
      val.comp = true;
    },
    del: (state, action) => {
      return state.filter((list) => list.text !== action.payload);
    },
  },
});

export const { add, del, comp } = Todoslice.actions;
export default Todoslice.reducer;
