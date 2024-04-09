import React from "react";
import { createRoot } from "react-dom/client";
import { createStore } from "redux";
import reducer from "./reducer";
import App from "./components/App";
import { Provider } from "react-redux";

const store = createStore(reducer);

// const { dispatch, subscribe, getState } = store;
const root = createRoot(document.getElementById("root"));
// const { inc, rnd, dec } = bindActionCreators(actions, dispatch);

  root.render(
    <React.StrictMode>
      {/*<Counter
        counter={getState().value}
        inc={inc}
        dec={dec}
        rnd={() => {
          const value = Math.floor(Math.random() * 10);
        rnd(value)}
        />}*/}

      <Provider store = {store}>
        <App />
      </Provider>
    </React.StrictMode>
  );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
