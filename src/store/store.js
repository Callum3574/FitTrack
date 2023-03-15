import { configureStore } from "@reduxjs/toolkit";
import {
  walkDataReducer,
  setWalkData,
  resetForm,
} from "./slices/WalkPostSlice.js";
import { gymDataApi } from "./slices/GymDataSlice.js";

export const store = configureStore({
  reducer: {
    test: walkDataReducer,
    hi: gymDataApi.reducer,
  },
});

export { setWalkData, resetForm };
