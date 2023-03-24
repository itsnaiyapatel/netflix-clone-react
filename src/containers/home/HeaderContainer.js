import React from "react";
import {Header, LanguageMenu, Background, NetflixLogo} from "../../components";
import OptFormContainer from "./OptFormContainer";
import * as ROUTE from "../../constants/routes";

function HeaderContainer() {
  return (
    <>
      <Background bg bgOnSmallPort>
        <Background.DarkFilter>
          <Header>
            <Header.Section>
              <NetflixLogo size="medium" />
              <Header.SubSection>
                <LanguageMenu
                  optionsArray={["English", "French"]}
                  logo={"images/icons/language.png"}
                />
                <Header.Button to={ROUTE.LOGIN}>Sign In</Header.Button>
              </Header.SubSection>
            </Header.Section>
            <Header.Section style={{flexDirection: "column"}}>
              <Header.Title>Unlimited movies, TV shows, and more.</Header.Title>
              <Header.SubTitle>Watch anywhere. Cancel anytime.</Header.SubTitle>
              <OptFormContainer />
            </Header.Section>
          </Header>
        </Background.DarkFilter>
      </Background>
      <Header.GrayBorder />
    </>
  );
}

export default HeaderContainer;
