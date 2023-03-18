import React from "react";
import faqsData from "../data/faqsData.json";
import Accordion from "../components/accordion";
import OptForm from "../components/opt-form";

function AccordionContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      <Accordion.Content>
        {faqsData.map((item) => (
          <Accordion.Item key={item.id}>
            <Accordion.Question>{item.header}</Accordion.Question>
            <Accordion.Answer>{item.body}</Accordion.Answer>
          </Accordion.Item>
        ))}
      </Accordion.Content>

      <OptForm>
      <OptForm.Text>
          Ready to watch? Enter your email to create or restart your membership
        </OptForm.Text>
        <OptForm.Input placeholder="Email address" />
        <OptForm.Button>Get Started</OptForm.Button>
        
      </OptForm>
    </Accordion>
  );
}

export default AccordionContainer;
