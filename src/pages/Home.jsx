import React from "react";
import {
  AccordionContainer,
  AdBannerContainer,
  FooterContainer,
  HeaderContainer,
  JumbotronContainer,
} from "../containers/home/index";


function Home() {
  return (
    <>
      <AdBannerContainer />
      <HeaderContainer />
      <JumbotronContainer />
      <AccordionContainer />
      <FooterContainer />
    </>
  );
}

export default Home;
