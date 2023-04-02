import React from "react";
import {Background} from "../../components";
import NavContainer from "./NavContainer";

function HeaderContainer({profile}) {
  const backgroundStyle = {
    height: "100vh",
  };

  return (
    <>
      <Background bg="images/header/browse-header.jpg" style={backgroundStyle}>
        <NavContainer profile={profile}/>
      </Background>
    </>
  );
}

export default HeaderContainer;
