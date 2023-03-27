import React, {useContext} from "react";
import {useFormik} from "formik";
import {CustomForm, FloatingInput} from "../../components";
import * as ROUTE from "../../constants/routes";
import * as yup from "yup";
import { auth } from "../../config/firebase";
import {FirebaseContext} from "../../context/firebase";
import {  signInWithEmailAndPassword   } from 'firebase/auth';

function LoginFormContainer() {
  const {app} = useContext(FirebaseContext);

  const validationSchema = yup.object().shape({
    email: yup.string().required("Required!"),
    password: yup.string().required("Required!"),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values) => {
   
      signInWithEmailAndPassword(auth, values.email, values.password)
      .then(() => {
        console.log("Login Successful.");
      })
      .catch((error) => {
        console.log("Error: " + error);
      });
  };

  const {values, errors, touched, handleBlur, handleChange, handleSubmit} =
    useFormik({
      initialValues: initialValues,
      validationSchema: validationSchema,
      onSubmit,
    });

  return (
    <CustomForm>
      <CustomForm.Base onSubmit={handleSubmit} method="POST">
        <CustomForm.Section>
          <CustomForm.Title>Sign In</CustomForm.Title>

          <FloatingInput>
            <FloatingInput.Input
              value={values.email}
              id="email"
              onChange={handleChange}
              type="email"
              name="email"
              onBlur={handleBlur}
              className={errors.email && touched.email ? "input-error" : ""}
            />
            <FloatingInput.Label
              label={"Email or phone number"}
              className={values.email && "filled"}
            />
            {errors.email && touched.email && (
              <FloatingInput.ErrorText className="error">
                {errors.email}
              </FloatingInput.ErrorText>
            )}
          </FloatingInput>

          <FloatingInput>
            <FloatingInput.Input
              value={values.password}
              id="password"
              onChange={handleChange}
              type="password"
              name="password"
              onBlur={handleBlur}
              className={
                errors.password && touched.password ? "input-error" : ""
              }
            />
            <FloatingInput.Label
              label={"Password"}
              className={values.password && "filled"}
            />
            {errors.password && touched.password && (
              <FloatingInput.ErrorText className="error">
                {errors.password}
              </FloatingInput.ErrorText>
            )}
          </FloatingInput>

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
