import React from "react";
import {Body, Section, Image, SubTitle, Button, Title} from "./pageOneStyles";

import * as ROUTE from "../../constants/routes";

function PageOneBody() {
  return (
    <Body>
      <Section>
        <Image src="images/sign-up/page1.png" />
        <Title>Finish setting up your account</Title>
        <SubTitle>
          Netflix is personalized for you. Create a password to start watching
          Netflix
        </SubTitle>
        <Button to={ROUTE.SIGN_UP_CONTINUE}>Next</Button>
      </Section>
    </Body>
  );
}

export default PageOneBody;
