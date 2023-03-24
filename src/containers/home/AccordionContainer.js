import React from "react";
import faqsData from "../../data/faqsData.json";
import {Accordion} from "../../components";
import OptFormContainer from "./OptFormContainer";

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
      <OptFormContainer />
    </Accordion>
  );
}

export default AccordionContainer;
