import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  walkData: {
    exercise_id: 1,
    duration: "",
    calories: "",
    steps: "",
    date: "",
    distance: "",
    user_id: "",
    location: "",
    rating: "",
  },
  status: "idle",
  error: null,
};

export const walkDataSlice = createSlice({
  name: "walkData",
  initialState,
  reducers: {
    setWalkData(state, action) {
      const { name, value } = action.payload;
      return {
        ...state,
        walkData: {
          ...state.walkData,
          [name]: value,
        },
      };
    },
    resetForm(state) {
      return initialState;
    },
  },
});

export const { setWalkData, resetForm } = walkDataSlice.actions;
export const walkDataReducer = walkDataSlice.reducer;
