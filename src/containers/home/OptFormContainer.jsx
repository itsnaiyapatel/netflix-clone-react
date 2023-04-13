import React from "react";
import * as yup from "yup";
import {useFormik} from "formik";

import {FloatingInput, OptForm} from "../../components";
import * as ROUTE from "../../constants/routes";
import {useNavigate} from "react-router-dom";

function OptFormContainer() {
  let navigate = useNavigate();

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .required("Required!")
      .email()
      .matches(/^(?!.*@[^,]*,)/),
  });

  const initialValues = {
    email: "",
  };

  const onSubmit = (values) => {
    navigate(ROUTE.SIGN_UP);
  };

  const {values, errors, touched, handleBlur, handleChange, handleSubmit} =
    useFormik({
      initialValues: initialValues,
      validationSchema: validationSchema,
      onSubmit,
    });

  return (
    <OptForm onSubmit={handleSubmit}>
      <OptForm.Text>
        Ready to watch? Enter your email to create or restart your membership
      </OptForm.Text>
      <OptForm.Section>
        <FloatingInput className="opt-form">
          <FloatingInput.Input
            value={values.email}
            id="email"
            onChange={handleChange}
            type="email"
            name="email"
            onBlur={handleBlur}
            className={
              errors.email && touched.email ? "input-error-signup" : ""
            }
          />
          <FloatingInput.Label
            label={"Enter Email Address"}
            className={values.email && "filled"}
          />
          {errors.email && touched.email && (
            <FloatingInput.ErrorText className="error">
              {errors.email}
            </FloatingInput.ErrorText>
          )}
        </FloatingInput>
        <OptForm.Button type="submit">Get Started</OptForm.Button>
      </OptForm.Section>
    </OptForm>
  );
}

export default OptFormContainer;
