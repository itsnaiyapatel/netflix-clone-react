import React from "react";
import {Body, Button, Text, Section} from "./styles/opt-form";

export default function OptForm({children, ...restProps}) {
  return <Body {...restProps}>{children}</Body>;
}

OptForm.Text = function OptFormText({children, ...restProps}) {
  return <Text {...restProps}>{children}</Text>;
};

OptForm.Section = function OptFormSection({children, ...restProps}) {
  return <Section {...restProps}>{children}</Section>;
};

OptForm.Button = function OptFormButton({children, ...restProps}) {
  return (
    <Button {...restProps}>
      {children}
      <img src="/images/icons/white.png" alt="icons" style={{color: "white"}} />
    </Button>
  );
};
