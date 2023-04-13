import React from "react";
import {
  Body,
  Selection,
  Options,
  Container,
  UserPicture,
  UpArrowIcon,
  Content,
  UserName,
  Item,
  SignOutBtn,
} from "./styles/hover-dropdown";

export default function HoverDropdown({children, ...restProps}) {
  return <Body {...restProps}>{children}</Body>;
}

HoverDropdown.Selection = function HoverDropdown({children, ...restProps}) {
  return <Selection {...restProps}>{children}</Selection>;
};
HoverDropdown.Options = function HoverDropdownOptions({
  children,
  ...restProps
}) {
  return (
    <Options {...restProps}>
      <UpArrowIcon src="images/icons/up-arrow.png" />
      <Content>{children}</Content>
    </Options>
  );
};

HoverDropdown.UserPicture = function HoverDropdownUserPicture({
  children,
  ...restProps
}) {
  return <UserPicture {...restProps} />;
};

HoverDropdown.UserName = function HoverDropdownUserName({
  children,
  ...restProps
}) {
  return <UserName {...restProps}>{children}</UserName>;
};

HoverDropdown.Item = function HoverDropdownItem({
  children,
  ...restProps
}) {
  return <Item {...restProps}>{children}</Item>;
};

HoverDropdown.Profile = function HoverDropdownProfile({...restProps}) {
  return (
    <Container>
      <UserPicture {...restProps} />
      <UpArrowIcon src="images/icons/up-arrow.png" />
    </Container>
  );
};

HoverDropdown.SignOutBtn = function HoverDropdownSignOutBtn({
  children,
  ...restProps
}) {
  return <SignOutBtn {...restProps}>{children}</SignOutBtn>;
};
