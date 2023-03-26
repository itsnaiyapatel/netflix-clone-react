import React from "react";
import {Container, Label, Input, ErrorText} from "./styles/floating-input";

export default function FloatingInput({children, ...restProps}) {
  return <Container {...restProps}>{children}</Container>;
}

FloatingInput.Label = function FloatingInputLabel({label, ...restProps}) {
  return <Label {...restProps}>{label}</Label>;
};

FloatingInput.Input = function FloatingInputInput({...restProps}) {
  return <Input {...restProps} />;
};

FloatingInput.ErrorText = function FloatingInputErrorText({...restProps}) {
  return <ErrorText {...restProps}></ErrorText>;
};