import React from "react";
import {Body, Container, Profile, UpArrowIcon} from './styles/hover-dropdown'

export default function HoverDropdown({children, ...restProps}) {
  return <Body {...restProps}>{children}</Body>;
}

HoverDropdown.Profile = function HoverDropdownProfile({...restProps}) {
  return (
    <Container>
      <Profile {...restProps}/>
      <UpArrowIcon src="images/icons/up-arrow.png" />
    </Container>
  );
};
