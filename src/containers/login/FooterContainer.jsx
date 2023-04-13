import React from "react";
import {Footer} from "../../components";

function FooterContainer() {
  return (
    <Footer topBorder>
      <Footer.Section>
        Questions? Call<Footer.CustomLink>1-844-542-4813</Footer.CustomLink>
      </Footer.Section>
      <Footer.Section>
        <Footer.SubSection>
          <Footer.CustomLink>FAQ</Footer.CustomLink>
          <Footer.CustomLink>Help Center</Footer.CustomLink>
          <Footer.CustomLink>Netflix Shop</Footer.CustomLink>
          <Footer.CustomLink>Terms of Use</Footer.CustomLink>
          <Footer.CustomLink>Privacy</Footer.CustomLink>
          <Footer.CustomLink>Cookie Preferences</Footer.CustomLink>
          <Footer.CustomLink>Corporate Information</Footer.CustomLink>
        </Footer.SubSection>
      </Footer.Section>
    </Footer>
  );
}

export default FooterContainer;
