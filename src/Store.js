import { configureStore } from "@reduxjs/toolkit";
import reducer from "./TodoSlice";
const store = configureStore({
  reducer: { todo: reducer },
});

export default store;
