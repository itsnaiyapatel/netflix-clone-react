import React from "react";
import FloatingInput from "../floating-input";

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
  Error,
  ErrorText,
} from "./styles/form";

export default function CustomForm({children, ...restProps}) {
  return <Body {...restProps}>{children}</Body>;
}

CustomForm.Base = function CustomFormBase({children, ...restProps}) {
  return <Base {...restProps}>{children}</Base>;
};

CustomForm.Title = function CustomFormTitle({children, ...restProps}) {
  return <Title {...restProps}>{children}</Title>;
};

CustomForm.Text = function CustomFormText({children, size, ...restProps}) {
  return (
    <Text size={size} {...restProps}>
      {children}
    </Text>
  );
};

CustomForm.Section = function CustomFormSection({children, ...restProps}) {
  return <Section {...restProps}>{children}</Section>;
};

CustomForm.CustomLink = function CustomFormCustomLink({
  children,
  ...restProps
}) {
  return <CustomLink {...restProps}>{children}</CustomLink>;
};

CustomForm.CheckBox = function CustomFormCheckBox({children, ...restProps}) {
  return <input type="checkbox" {...restProps} />;
};

CustomForm.Button = function CustomFormButton({children, ...restProps}) {
  return <Button {...restProps}>{children}</Button>;
};

CustomForm.SubSection = function CustomFormSubSection({
  children,
  ...restProps
}) {
  return <SubSection {...restProps}>{children}</SubSection>;
};

CustomForm.Error = function CustomFormError({error, ...restProps}) {
  return <Error {...restProps}>{error}</Error>;
};

