import React from "react";
import {Title, SubTitle, Body, Button} from "./pageOneStyles";
import {SignUpForm, titleStyle, inputStyle, buttonStyle} from "./pageTwoStyles";
import {FloatingInput} from "../../components";
import {useFormik} from "formik";
import * as yup from "yup";

function PageTwoBody() {
  const validationSchema = yup.object().shape({
    email: yup.string().required("Required!"),
    password: yup.string().required("Required!"),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values, actions) => {
    console.log("Submit Result ............");
    console.log(values);
  };

  const {values, errors, touched, handleBlur, handleChange, handleSubmit} =
    useFormik({
      initialValues: initialValues,
      validationSchema: validationSchema,
      onSubmit,
    });

  return (
    <Body>
      <SignUpForm onSubmit={handleSubmit}>
        <Title style={titleStyle}>
          Create a password to start your membership
        </Title>
        <SubTitle style={titleStyle}>
          Just a few more steps and you're done!
        </SubTitle>
        <SubTitle style={titleStyle}>We hate paperwork, too.</SubTitle>

        <FloatingInput>
          <FloatingInput.Input
            style={inputStyle}
            value={values.email}
            id="email"
            onChange={handleChange}
            type="email"
            name="email"
            onBlur={handleBlur}
            className={`${
              errors.email && touched.email ? "input-error-signup" : ""
            } ${!errors.email && touched.email ? "green-border" : ""}`}
          />
          <FloatingInput.Label
            label={"Email"}
            className={values.email && "filled"}
          />
          {errors.email && touched.email && (
            <FloatingInput.ErrorText style={{color: "red"}} className="error">
              {errors.email}
            </FloatingInput.ErrorText>
          )}
        </FloatingInput>

        <FloatingInput>
          <FloatingInput.Input
            style={inputStyle}
            value={values.password}
            id="password"
            onChange={handleChange}
            type="password"
            name="password"
            onBlur={handleBlur}
            className={`${
              errors.password && touched.password ? "input-error-signup" : ""
            } ${!errors.password && touched.password ? "green-border" : ""}`}
          />
          <FloatingInput.Label
            label={"Password"}
            className={values.password && "filled"}
          />
          {errors.password && touched.password && (
            <FloatingInput.ErrorText style={{color: "red"}} className="error">
              {errors.password}
            </FloatingInput.ErrorText>
          )}
        </FloatingInput>
        
        <Button type="submit" style={buttonStyle}>
          Register
        </Button>
      </SignUpForm>
    </Body>
  );
}

export default PageTwoBody;
