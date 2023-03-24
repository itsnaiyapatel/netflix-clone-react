import React from "react";
import {
  Body,
  Base,
  Button,
  Title,
  Input,
  Text,
  Section,
  CustomLink,
  SubSection,
} from "./styles/form";

export default function Form({children, ...restProps}) {
  return <Body {...restProps}>{children}</Body>;
};

Form.Base = function FormBase({children, ...restProps}) {
  return <Base {...restProps}>{children}</Base>;
};

Form.Title = function FormTitle({children, ...restProps}) {
  return <Title {...restProps}>{children}</Title>;
};

Form.Input = function FormInput({children, ...restProps}) {
  return <Input {...restProps}>{children}</Input>;
};

Form.Text = function FormText({children, size, ...restProps}) {
  return (
    <Text size={size} {...restProps}>
      {children}
    </Text>
  );
};

Form.Section = function FormSection({children, ...restProps}) {
  return <Section {...restProps}>{children}</Section>;
};

Form.CustomLink = function FormCustomLink({children, ...restProps}) {
  return <CustomLink {...restProps}>{children}</CustomLink>;
};

Form.CheckBox = function FormCheckBox({children, ...restProps}) {
  return <input type="checkbox" {...restProps} />;
};

Form.Button = function FormButton({children, ...restProps}) {
  return <Button {...restProps}>{children}</Button>;
};

Form.SubSection = function FormSubSection({children, ...restProps}) {
  return <SubSection {...restProps}>{children}</SubSection>;
};
