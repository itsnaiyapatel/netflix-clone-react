import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import * as ROUTE from './constants/routes'
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import SignUpContinue from "./pages/SignUpContinue";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTE.HOME} element={<Home />}/>
        <Route path={ROUTE.LOGIN} element={<Login />}/>
        <Route path={ROUTE.SIGN_UP} element={<SignUp />}/>
        <Route path={ROUTE.SIGN_UP_CONTINUE} element={<SignUpContinue />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
