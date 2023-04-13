import React from "react";
import styled from "styled-components";

import {
  AccordionContainer,
  AdBannerContainer,
  FooterContainer,
  HeaderContainer,
  JumbotronContainer,
} from "../containers/home/index";

function Home() {
  const Body = styled.div`
    background-color: black;
  `;

  return (
    <Body>
      <AdBannerContainer />
      <HeaderContainer />
      <JumbotronContainer />
      <AccordionContainer />
      <FooterContainer />
    </Body>
  );
}

export default Home;
