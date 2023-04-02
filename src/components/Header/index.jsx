import React from "react";
import {
  Container,
  Body,
  Section,
  SubSection,
  Button,
  Title,
  SubTitle,
  GrayBorder,
} from "./styles/header";

export default function Header({children, ...restProps}) {
  return (
    <Container>
      <Body {...restProps}>{children}</Body>
    </Container>
  );
}

Header.Section = function HeaderSection({children, ...restProps}) {
  return <Section {...restProps}>{children}</Section>;
};

Header.SubSection = function HeaderSubSection({children, ...restProps}) {
  return <SubSection {...restProps}>{children}</SubSection>;
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

Header.GrayBorder = function HeaderGrayBorder({...restProps}) {
  return <GrayBorder {...restProps} />;
};


