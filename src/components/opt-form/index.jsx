import React from "react";
import {FormContainer, Input, Button, Text} from "./styles/optForm";

export default function OptForm({children, ...restProps}) {
  return <FormContainer {...restProps}>{children}</FormContainer>;
}

OptForm.Input = function OptFormInput({...restProps}) {
  return <Input {...restProps}></Input>;
};

OptForm.Button = function OptFormButton({children, ...restProps}) {
  return (
    <Button {...restProps}>
      {children}
      <img src="/images/icons/white.png" alt="icons" style={{color: 'white'}} />
    </Button>
  );
};

OptForm.Text = function OptFormText({children, ...restProps}) {
  return <Text {...restProps}>{children}</Text>;
};
