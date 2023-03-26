import React from "react";
import {Footer, LanguageMenu} from "../../components";

function FooterContainer() {
  const style = {
    color: "#737373",
  };

  return (
    <Footer className="sign-up-page">
      <Footer.Section style={style}>
        Questions? Call
        <Footer.CustomLink style={style}>1-844-542-4813</Footer.CustomLink>
      </Footer.Section>
      <Footer.Section>
        <Footer.SubSection style={style}>
          <Footer.CustomLink style={style}>FAQ</Footer.CustomLink>
          <Footer.CustomLink style={style}>Help Center</Footer.CustomLink>
          <Footer.CustomLink style={style}>Netflix Shop</Footer.CustomLink>
          <Footer.CustomLink style={style}>Terms of Use</Footer.CustomLink>
          <Footer.CustomLink style={style}>Privacy</Footer.CustomLink>
          <Footer.CustomLink style={style}>
            Cookie Preferences
          </Footer.CustomLink>
          <Footer.CustomLink style={style}>
            Corporate Information
          </Footer.CustomLink>
        </Footer.SubSection>
      </Footer.Section>
    </Footer>
  );
}

export default FooterContainer;
