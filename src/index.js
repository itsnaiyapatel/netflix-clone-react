import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ContentContextProvider from "./context/content-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContentContextProvider>
    <App />
  </ContentContextProvider>
);
