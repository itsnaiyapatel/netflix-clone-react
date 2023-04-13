import React from "react";

import {Footer, LanguageMenu} from "../../components";
import * as ROUTE from '../../constants/routes'

function FooterContainer() {
  return (
    <Footer>
      <Footer.Section>
        Questions? Call
        <Footer.CustomLink style={{fontSize: "16px"}}>
          1-844-542-4813
        </Footer.CustomLink>
      </Footer.Section>

      <Footer.Section>
        <Footer.SubSection>
          <Footer.CustomLink to={ROUTE.UNDER_CONSTRUCTION}>
            FAQ
          </Footer.CustomLink>
          <Footer.CustomLink to={ROUTE.UNDER_CONSTRUCTION}>
            Account
          </Footer.CustomLink>
          <Footer.CustomLink to={ROUTE.UNDER_CONSTRUCTION}>
            Jobs
          </Footer.CustomLink>
          <Footer.CustomLink to={ROUTE.UNDER_CONSTRUCTION}>
            Buy Gift Cards
          </Footer.CustomLink>
          <Footer.CustomLink to={ROUTE.UNDER_CONSTRUCTION}>
            Privacy
          </Footer.CustomLink>
          <Footer.CustomLink to={ROUTE.UNDER_CONSTRUCTION}>
            Contact Us
          </Footer.CustomLink>
          <Footer.CustomLink to={ROUTE.UNDER_CONSTRUCTION}>
            Only on Netflix
          </Footer.CustomLink>

          <Footer.CustomLink to={ROUTE.UNDER_CONSTRUCTION}>
            Gift Card Terms
          </Footer.CustomLink>
          <Footer.CustomLink to={ROUTE.UNDER_CONSTRUCTION}>
            Media Center
          </Footer.CustomLink>
          <Footer.CustomLink to={ROUTE.UNDER_CONSTRUCTION}>
            Neflix Shop
          </Footer.CustomLink>
          <Footer.CustomLink to={ROUTE.UNDER_CONSTRUCTION}>
            Ways to Watch
          </Footer.CustomLink>
          <Footer.CustomLink to={ROUTE.UNDER_CONSTRUCTION}>
            Cookie Preferences
          </Footer.CustomLink>
          <Footer.CustomLink to={ROUTE.UNDER_CONSTRUCTION}>
            Speed Test
          </Footer.CustomLink>

          <Footer.CustomLink to={ROUTE.UNDER_CONSTRUCTION}>
            Help Center
          </Footer.CustomLink>
          <Footer.CustomLink to={ROUTE.UNDER_CONSTRUCTION}>
            Investor Relations
          </Footer.CustomLink>
          <Footer.CustomLink to={ROUTE.UNDER_CONSTRUCTION}>
            Redeem Gift Cards
          </Footer.CustomLink>
          <Footer.CustomLink to={ROUTE.UNDER_CONSTRUCTION}>
            Terms of Use
          </Footer.CustomLink>
          <Footer.CustomLink to={ROUTE.UNDER_CONSTRUCTION}>
            Corporate Information
          </Footer.CustomLink>
          <Footer.CustomLink to={ROUTE.UNDER_CONSTRUCTION}>
            Legal Notices
          </Footer.CustomLink>
        </Footer.SubSection>
      </Footer.Section>

      <Footer.Section style={{flexDirection: "column"}}>
        <LanguageMenu
          optionsArray={["English", "French"]}
          logo={"images/icons/language.png"}
          style={{width: "110px"}}
        />
        <Footer.CustomLink style={{textDecoration: "none"}}>
          Netflix Canada
        </Footer.CustomLink>
      </Footer.Section>
    </Footer>
  );
}

export default FooterContainer;
