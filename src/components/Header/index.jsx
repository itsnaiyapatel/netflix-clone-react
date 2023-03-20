import React from "react";
import {
  Container,
  Background,
  Body,
  Section,
  SubSection,
  Logo,
  Button,
  Title,
  SubTitle,
} from "./styles/header";

export default function Header({children, ...restProps}) {
  return (
    <Container>
      <Background>
      <Body {...restProps}>{children}</Body>
      </Background>      
    </Container>
  );
}

Header.Section = function HeaderSection({children, ...restProps}) {
  return <Section {...restProps}>{children}</Section>;
};
Header.SubSection = function HeaderSubSection({children, ...restProps}) {
  return <SubSection {...restProps}>{children}</SubSection>;
};
Header.Logo = function HeaderLogo({children, ...restProps}) {
  return <Logo {...restProps}>{children}</Logo>;
};
Header.Button = function HeaderButton({children, ...restProps}) {
  return <Button {...restProps}>{children}</Button>;
};
Header.Title = function HeaderTitle({children, ...restProps}) {
  return <Title {...restProps}>{children}</Title>;
};
Header.SubTitle = function HeaderSubTitle({children, ...restProps}) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};
