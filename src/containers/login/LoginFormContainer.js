import React from "react";
import {useFormik} from "formik";
import {CustomForm} from "../../components";
import * as ROUTE from "../../constants/routes";
import * as yup from "yup";

function LoginFormContainer() {

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
    actions.resetForm();
  };

  const {values, errors, touched, handleBlur, handleChange, handleSubmit} =
    useFormik({
      initialValues: initialValues,
      validationSchema: validationSchema,
      onSubmit,
    });

  return (
    <CustomForm>
      <CustomForm.Base onSubmit={handleSubmit}>
        <CustomForm.Section>
          <CustomForm.Title>Sign In</CustomForm.Title>

          <CustomForm.Error>Hello</CustomForm.Error>
          
          <CustomForm.Input
            value={values.email}
            id="email"
            onChange={handleChange}
            placeholder="Email or phone number"
            type="text"
            name="email"
            onBlur={handleBlur}
            labelClassName={values.email && "filled"}
            className={errors.email && touched.email ? "input-error" : ""}
          />

          {errors.email && touched.email && (
            <CustomForm.ErrorText className="error">{errors.email}</CustomForm.ErrorText>
          )}

          <CustomForm.Input
            placeholder="Password"
            type="password"
            name="password"
            id="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            labelClassName={values.password && "filled"}
            className={errors.password && touched.password ? "input-error" : ""}
          />

          {errors.password && touched.password && (
            <CustomForm.ErrorText className="error">{errors.password}</CustomForm.ErrorText>
            )}

          <CustomForm.Button type="submit">Sign In</CustomForm.Button>

          <CustomForm.SubSection>
            <CustomForm.CheckBox />
            <CustomForm.Text size={"13px"} style={{flex: "1"}}>
              Remember me
            </CustomForm.Text>
            <CustomForm.CustomLink>Need help?</CustomForm.CustomLink>
          </CustomForm.SubSection>
        </CustomForm.Section>
        <CustomForm.Section>
          <CustomForm.Text style={{marginBottom: "10px"}}>
            New to Netflix?{" "}
            <CustomForm.CustomLink
              to={ROUTE.HOME}
              style={{color: "white", fontSize: "16px"}}
            >
              Sign up now.
            </CustomForm.CustomLink>
          </CustomForm.Text>
          <CustomForm.Text size={"13px"}>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </CustomForm.Text>
        </CustomForm.Section>
      </CustomForm.Base>
    </CustomForm>
  );
}

export default LoginFormContainer;
