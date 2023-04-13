import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import * as ROUTE from "./constants/routes";
import {
  Home,
  Login,
  SignUp,
  SignUpContinue,
  Browse,
  UnderConstruction,
} from "./pages/";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTE.HOME} element={<Home />} />
        <Route path={ROUTE.LOGIN} element={<Login />} />
        <Route path={ROUTE.SIGN_UP} element={<SignUp />} />
        <Route path={ROUTE.SIGN_UP_CONTINUE} element={<SignUpContinue />} />
        <Route path={ROUTE.BROWSE} element={<Browse />} />
        <Route
          path={ROUTE.UNDER_CONSTRUCTION}
          element={<UnderConstruction />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
