import React from "react";
import {Container, Header, List, ListItem} from "./styles/country";

export default function Country({children, ...restProps}) {
  return <Container {...restProps}>{children}</Container>;
}

Country.Header = function CountryHeader({children, ...restProps}) {
  return <Header {...restProps}>{children}</Header>;
};

Country.List = function CountryList({children, ...restProps}) {
  return <List {...restProps}>{children}</List>;
};

Country.ListItem = function CountryListItem({children, ...restProps}) {
  return <ListItem {...restProps}>{children}</ListItem>;
};
