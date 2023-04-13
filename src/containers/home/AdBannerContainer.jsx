import React from "react";

import * as ROUTE from '../../constants/routes'
import {AdBanner} from "../../components";

function AdBannerContainer() {
  return (
    <AdBanner>
      <AdBanner.Badge>NEW!</AdBanner.Badge>
      <AdBanner.Text>
        Plans now start at{" "}
        <strong style={{color: "black", fontWeight: "700"}}>$5.99</strong>.
      </AdBanner.Text>
      <AdBanner.CustomLink to={ROUTE.UNDER_CONSTRUCTION}>
        Learn More
        <img
          src="images/icons/forward.png"
          style={{filter: "invert(1)", height: "18px"}}
        />
      </AdBanner.CustomLink>
    </AdBanner>
  );
}

export default AdBannerContainer;
