import React from "react";
import {Container, Body, Section, SubSection, CustomLink} from "./styles/footer";

export default function Footer({children, ...restProps}) {
  return (
    <Container>
      <Body>{children}</Body>
    </Container>
  );
}

Footer.Section = function FooterSection({children, ...restProps}) {
  return <Section {...restProps}>{children}</Section>;
};

Footer.SubSection = function FooterSubSection({children, ...restProps}) {
  return <SubSection {...restProps}>{children}</SubSection>;
};

Footer.CustomLink = function FooterCustomLink({children, ...restProps}) {
  return <CustomLink {...restProps}>{children}</CustomLink>;
};
