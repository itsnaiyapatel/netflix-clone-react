import React from "react";
import {Body, Title, ItemList} from "./styles/row";

export default function Row({children, ...restProps}) {
  return <Body {...restProps}>{children}</Body>;
}

Row.Title = function RowTitle({children, ...restProps}) {
  return <Title {...restProps}>{children}</Title>;
};

Row.ItemList = function RowItemList({children, ...restProps}) {
  return <ItemList {...restProps}>{children}</ItemList>;
};
