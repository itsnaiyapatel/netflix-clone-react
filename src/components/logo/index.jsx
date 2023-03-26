import React from "react";
import {Link} from "react-router-dom";
import {Logo} from "./styles/logo";
import * as ROUTE from '../../constants/routes'

export default function NetflixLogo({size, ...restProps}) {
  return (
    <Link to={ROUTE.HOME}>
      <Logo size={size} src="images/logo/netflix-logo.png" {...restProps} />
    </Link>
  );
}
