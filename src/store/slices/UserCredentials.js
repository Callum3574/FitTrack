import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import checkUser from "../../Components/Auth/CheckUser";

const initialState = {
  username: null,
};
export const checkingUser = createAsyncThunk(
  "auth/checkingUser",
  async (payload, thunkAPI) => {
    const name = await checkUser(payload);
    console.log(name.name);
    return name.name;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(checkingUser.fulfilled, (state, action) => {
      console.log(action.payload);
      state.username = action.payload;
    });
  },
});

export default authSlice.reducer;
