import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./reducers";

const store = createStore(reducer, applyMiddleware(thunk));
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <>
        <App />
      </>
    </BrowserRouter>
  </Provider>
);
