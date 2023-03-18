import React, {useState, useContext, createContext} from "react";
import {
  Container,
  Body,
  Title,
  Content,
  Item,
  Question,
  Answer,
} from "./styles/accordion";

const ToggleContext = createContext();

const ToggleProvider = ({children}) => {
  const [toggleShow, setToggleShow] = useState(false);
  return (
    <ToggleContext.Provider value={{toggleShow, setToggleShow}}>
      {children}
    </ToggleContext.Provider>
  );
};

export default function Accordion({children, ...restProps}) {
  return (
    <Container>
      <Body {...restProps}>{children}</Body>
    </Container>
  );
}

Accordion.Title = function AccordionTitle({children, ...restProps}) {
  return <Title {...restProps}>{children}</Title>;
};

Accordion.Content = function AccordionContent({children, ...restProps}) {
  return <Content {...restProps}>{children}</Content>;
};

Accordion.Item = function AccordionItem({children, ...restProps}) {
  return (
    <ToggleProvider>
      <Item {...restProps}>{children}</Item>
    </ToggleProvider>
  );
};

Accordion.Question = function AccordionQuestion({children, ...restProps}) {
  const {toggleShow, setToggleShow} = useContext(ToggleContext);

  return (
    <Question onClick={() => setToggleShow(!toggleShow)} {...restProps}>
      {children}
      {toggleShow ? (
        <img src="images/icons/close.png" />
      ) : (
        <img src="images/icons/add.png"></img>
      )}
    </Question>
  );
};

Accordion.Answer = function AccordionAnswer({children, ...restProps}) {
  const {toggleShow} = useContext(ToggleContext);

  return (
    <Answer className={toggleShow ? "open" : "closed"} {...restProps}>
      <span>{children}</span>
    </Answer>
  );
};
