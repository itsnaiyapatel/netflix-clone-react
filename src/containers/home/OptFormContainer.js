import React from "react";
import {OptForm} from "../../components";

function OptFormContainer() {
  return (
    <OptForm>
      <OptForm.Text>
        Ready to watch? Enter your email to create or restart your membership
      </OptForm.Text>
      <OptForm.Section>
        <OptForm.Input placeholder="Email address" />
        <OptForm.Button>Get Started</OptForm.Button>
      </OptForm.Section>
    </OptForm>
  );
}

export default OptFormContainer;
