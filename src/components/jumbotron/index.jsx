import React from "react";
import {Item, Body, Title, SubTitle, Image, Section} from "./styles/jumbotron";

export default function Jumbotron({children, direction = "row", ...restProps}) {
  return (
    <Item>
      <Body direction={direction}>{children}</Body>
    </Item>
  );
}

Jumbotron.Title = function JumbotronTitle({children, ...restProps}) {
  return <Title {...restProps}>{children}</Title>;
};

Jumbotron.SubTitle = function JumbotronSubTitle({children, ...restProps}) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Jumbotron.Image = function JumbotronImage({children, ...restProps}) {
  return <Image {...restProps} />;
};

Jumbotron.Section = function JumbotronSection({children, ...restProps}) {
  return <Section {...restProps}>{children}</Section>;
};
