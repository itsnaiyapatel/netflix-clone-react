import React, {useState} from "react";
import {Container, Label, Input} from "./styles/floating-input";

export default function FloatingInput({placeholder, name, labelClassName, ...restProps}) {

  return (
    <Container>
      <Input
        {...restProps}
      />
      <Label htmlFor={name} className={labelClassName}>
        {placeholder}
      </Label>
    </Container>
  );
}
