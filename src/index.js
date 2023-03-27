import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {FirebaseContext} from "./context/firebase";
import app from "./config/firebase";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FirebaseContext.Provider value={{app}}>
    <App />
  </FirebaseContext.Provider>
);
