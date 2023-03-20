import React from "react";
import {Body, Input, Button, Text, Section} from "./styles/opt-form";

export default function OptForm({children, ...restProps}) {
  return <Body {...restProps}>{children}</Body>;
}

OptForm.Text = function OptFormText({children, ...restProps}) {
  return <Text {...restProps}>{children}</Text>;
};

OptForm.Section = function OptFormSection({children, ...restProps}) {
  return <Section {...restProps}>{children}</Section>;
};

OptForm.Input = function OptFormInput({...restProps}) {
  return <Input {...restProps}></Input>;
};

OptForm.Button = function OptFormButton({children, ...restProps}) {
  return (
    <Button {...restProps}>
      {children}
      <img src="/images/icons/white.png" alt="icons" style={{color: "white"}} />
    </Button>
  );
};
