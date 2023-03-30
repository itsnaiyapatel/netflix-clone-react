import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {FirebaseProvider} from "./context/firebase";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FirebaseProvider>
    <App />
  </FirebaseProvider>
);
