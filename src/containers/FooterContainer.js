import React from "react";
import Footer from "../components/footer";
import LanguageMenu from "../components/language-menu";

function FooterContainer() {
  return (
    <div>
      <Footer>
        <Footer.Section>
          Questions? Call
          <Footer.CustomLink style={{fontSize: "16px"}}>
            1-844-542-4813
          </Footer.CustomLink>
        </Footer.Section>

        <Footer.Section>
          <Footer.SubSection>
            <Footer.CustomLink href={"https://help.netflix.com/en/node/412"}>
              FAQ
            </Footer.CustomLink>
            <Footer.CustomLink href={"https://help.netflix.com/en/node/412"}>
              Account
            </Footer.CustomLink>
            <Footer.CustomLink href={"https://help.netflix.com/en/node/412"}>
              Jobs
            </Footer.CustomLink>
            <Footer.CustomLink href={"https://help.netflix.com/en/node/412"}>
              Buy Gift Cards
            </Footer.CustomLink>
            <Footer.CustomLink href={"https://help.netflix.com/en/node/412"}>
              Privacy
            </Footer.CustomLink>
            <Footer.CustomLink href={"https://help.netflix.com/en/node/412"}>
              Contact Us
            </Footer.CustomLink>
            <Footer.CustomLink href={"https://help.netflix.com/en/node/412"}>
              Only on Netflix
            </Footer.CustomLink>

            <Footer.CustomLink href={"https://help.netflix.com/en/node/412"}>
              Gift Card Terms
            </Footer.CustomLink>
            <Footer.CustomLink href={"https://help.netflix.com/en/node/412"}>
              Media Center
            </Footer.CustomLink>
            <Footer.CustomLink href={"https://help.netflix.com/en/node/412"}>
              Neflix Shop
            </Footer.CustomLink>
            <Footer.CustomLink href={"https://help.netflix.com/en/node/412"}>
              Ways to Watch
            </Footer.CustomLink>
            <Footer.CustomLink href={"https://help.netflix.com/en/node/412"}>
              Cookie Preferences
            </Footer.CustomLink>
            <Footer.CustomLink href={"https://help.netflix.com/en/node/412"}>
              Speed Test
            </Footer.CustomLink>

            <Footer.CustomLink href={"https://help.netflix.com/en/node/412"}>
              Help Center
            </Footer.CustomLink>
            <Footer.CustomLink href={"https://help.netflix.com/en/node/412"}>
              Investor Relations
            </Footer.CustomLink>
            <Footer.CustomLink href={"https://help.netflix.com/en/node/412"}>
              Redeem Gift Cards
            </Footer.CustomLink>
            <Footer.CustomLink href={"https://help.netflix.com/en/node/412"}>
              Terms of Use
            </Footer.CustomLink>
            <Footer.CustomLink href={"https://help.netflix.com/en/node/412"}>
              Corporate Information
            </Footer.CustomLink>
            <Footer.CustomLink href={"https://help.netflix.com/en/node/412"}>
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
    </div>
  );
}

export default FooterContainer;
