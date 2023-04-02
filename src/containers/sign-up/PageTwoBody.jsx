import React, {useState} from "react";
import {Title, SubTitle, Body, Button, Error} from "./pageOneStyles";
import {SignUpForm, titleStyle, inputStyle, buttonStyle} from "./pageTwoStyles";
import {FloatingInput} from "../../components";
import {useFormik} from "formik";
import * as yup from "yup";
import * as ROUTE from "../../constants/routes";
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import {auth} from "../../config/firebase";
import {useNavigate} from "react-router-dom";

function PageTwoBody() {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleFirbaseError = (e) => {
    if (e.code === "auth/weak-password") {
      return setError("Weak password!");
    } else setError("Unexpected error");
    return console.log(JSON.stringify(e));
  };

  const validationSchema = yup.object().shape({
    fname: yup.string().required("Required!"),
    email: yup.string().required("Required!"),
    password: yup.string().required("Required!"),
  });

  const initialValues = {
    fname: "",
    email: "",
    password: "",
  };

  const onSubmit = (values, action) => {
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(() => {
        updateProfile(auth.currentUser, {
          displayName: values.fname,
          photoURL: Math.floor(Math.random() * 5) + 1,
        })
          .then(() => {
            console.log("Profile updated!");
            navigate(ROUTE.BROWSE);
          })
          .catch((error) => {
            handleFirbaseError(error);
            action.resetForm();
          });
      })
      .catch((error) => {
        handleFirbaseError(error);
        action.resetForm();

      });
  };

  const {values, errors, touched, handleBlur, handleChange, handleSubmit} =
    useFormik({
      initialValues: initialValues,
      validationSchema: validationSchema,
      onSubmit,
    });

  return (
    <Body>
      <SignUpForm onSubmit={handleSubmit} method="POST">
        <Title style={titleStyle}>
          Create a password to start your membership
        </Title>
        <SubTitle style={titleStyle}>
          Just a few more steps and you're done!
        </SubTitle>
        <SubTitle style={titleStyle}>We hate paperwork, too.</SubTitle>

        {error && <Error>{error}</Error>}

        <FloatingInput>
          <FloatingInput.Input
            style={inputStyle}
            value={values.fname}
            id="fname"
            onChange={handleChange}
            type="text"
            name="fname"
            onBlur={handleBlur}
            className={`${
              errors.fname && touched.fname ? "input-error-signup" : ""
            } ${!errors.fname && touched.fname ? "green-border" : ""}`}
          />
          <FloatingInput.Label
            label={"First name"}
            className={values.fname && "filled"}
          />
          {errors.fname && touched.fname && (
            <FloatingInput.ErrorText style={{color: "red"}} className="error">
              {errors.fname}
            </FloatingInput.ErrorText>
          )}
        </FloatingInput>

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
