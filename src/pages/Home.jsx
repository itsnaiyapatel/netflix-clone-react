import React from "react";
import AdBanner from "../components/ad-banner";
import AccordionContainer from "../containers/AccordionContainer";
import AdBannerContainer from "../containers/AdBannerContainer";
import FooterContainer from "../containers/FooterContainer";
import HeaderContainer from "../containers/HeaderContainer";
import JumbotronContainer from "../containers/JumbotronContainer";

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
