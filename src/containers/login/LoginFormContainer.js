import React from "react";
import {Form} from "../../components";
import * as ROUTE from "../../constants/routes";

function LoginFormContainer() {
  return (
    <Form>
      <Form.Base>
        <Form.Section>
          <Form.Title>Sign In</Form.Title>
          <Form.Input placeholder="Email or phone number" />
          <Form.Input placeholder="Password" />
          <Form.Button>Sign In</Form.Button>
          <Form.SubSection>
            <Form.CheckBox />
            <Form.Text size={"13px"} style={{flex: "1"}}>
              Remember me
            </Form.Text>
            <Form.CustomLink>Need help?</Form.CustomLink>
          </Form.SubSection>
        </Form.Section>
        <Form.Section>
          <Form.Text style={{marginBottom: "10px"}}>
            New to Netflix?{" "}
            <Form.CustomLink
              to={ROUTE.HOME}
              style={{color: "white", fontSize: "16px"}}
            >
              Sign up now.
            </Form.CustomLink>
          </Form.Text>
          <Form.Text size={"13px"}>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </Form.Text>
        </Form.Section>
      </Form.Base>
    </Form>
  );
}

export default LoginFormContainer;
