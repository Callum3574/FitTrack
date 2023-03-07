import { configureStore } from "@reduxjs/toolkit";
import { checkingUser } from "./slices/UserCredentials";
import authReducer from "./slices/UserCredentials";
export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export { checkingUser };
