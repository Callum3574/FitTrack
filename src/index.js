import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { store } from "./store/store.js";
import { Provider } from "react-redux";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { gymDataApi } from "./store/slices/GymDataSlice";
import "flowbite";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApiProvider api={gymDataApi}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ApiProvider>
    </Provider>
  </React.StrictMode>
);
