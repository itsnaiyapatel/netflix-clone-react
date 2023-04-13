import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";

import * as ROUTE from "../constants/routes";

function UnderConstruction() {
  
  const nav = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      nav(ROUTE.HOME);
    }, 3000);
  }, []);

  return (
    <Body>
      <Text>Site under construction !</Text>
      <SmallText>redirecting in 3 seconds</SmallText>
      <Image src="images/icons/maintence.png" />
    </Body>
  );
}

export default UnderConstruction;

const Body = styled.div`
  display: flex;
  background-color: black;
  height: 100vh;
  overflow: hidden;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: auto;
`;

const Image = styled.img`
  filter: invert(1);
  width: 30%;
  object: contain;
`;

const Text = styled.h1`
  font-size: 4vw;
  color: white;
  font-weight: 700;
`;

const SmallText = styled.p`
  margin: 1%;
`;
