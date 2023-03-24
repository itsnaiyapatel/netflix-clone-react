import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import * as ROUTE from './constants/routes'
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTE.HOME} element={<Home />}/>
        <Route path={ROUTE.LOGIN} element={<Login />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
