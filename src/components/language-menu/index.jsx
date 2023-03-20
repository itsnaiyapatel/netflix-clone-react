import React from "react";
import {Body,Select, Option, Logo} from "./styles/language-menu";

export default function LanguageMenu({optionsArray, logo, ...restProps}) {
  return (
    <Body {...restProps}>
      <Logo src={logo}/>
      <Select>
        {optionsArray?.map((item, index) => (
          <Option value={`${item}`} key={index}>
            {item}
          </Option>
        ))}
      </Select>
    </Body>
  );
}
