import React from "react";
import {Background, NetflixLogo} from "../components";
import FloatingInput from "../components/floating-input";
import {LoginFormContainer, FooterContainer} from "../containers/login/index";

function Login() {
  
  return (
    <Background bg>
      <NetflixLogo size="large" style={{margin: "2% 5%"}} />
      <LoginFormContainer />
      <FooterContainer />
    </Background>
  );
}

export default Login;
