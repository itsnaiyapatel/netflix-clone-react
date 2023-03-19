import React from "react";
import AccordionContainer from "../containers/AccordionContainer";
import FooterContainer from "../containers/FooterContainer";
import HeaderContainer from "../containers/HeaderContainer";
import JumbotronContainer from "../containers/JumbotronContainer";

function Home() {
  return (
    <>
      <HeaderContainer />
      <JumbotronContainer />
      <AccordionContainer />
      <FooterContainer />
      
    </>
  );
}

export default Home;
