import React from "react";
import Header from "../components/Header";
import OptFormContainer from "./OptFormContainer";
import NetflixLogo from "../netflix-logo.png";
import LanguageMenu from "../components/language-menu";

function HeaderContainer() {
  return (
    <Header>
      <Header.Section>
        <Header.Logo src={NetflixLogo} alt="Netflix" />
        <Header.SubSection>
          <LanguageMenu optionsArray={['English', 'French']} logo={'images/icons/language.png'}/>
          <Header.Button>Sign In</Header.Button>
        </Header.SubSection>
      </Header.Section>
      <Header.Section style={{flexDirection: "column"}}>
        <Header.Title>Unlimited movies, TV shows, and more.</Header.Title>
        <Header.SubTitle>Watch anywhere. Cancel anytime.</Header.SubTitle>
        <OptFormContainer />
      </Header.Section>
    </Header>
  );
}

export default HeaderContainer;
