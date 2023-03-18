import React from "react";
import jumbotronData from "../data/jumbotronData.json";
import Jumbotron from "../components/jumbotron/";

function JumbotronContainer() {
  return (
    <div>
      {jumbotronData.map((item) => (
        <Jumbotron key={item.id} direction={item.direction}>
          <Jumbotron.Section>
            <Jumbotron.Title>{item.title}</Jumbotron.Title>
            <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
          </Jumbotron.Section>
          <Jumbotron.Section>
            <Jumbotron.Image src={item.image} alt={item.alt} />
          </Jumbotron.Section>
        </Jumbotron>
      ))}
    </div>
  );
}

export default JumbotronContainer;
