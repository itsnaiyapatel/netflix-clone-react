import styled from "styled-components";
import {Link} from "react-router-dom";


export const Body = styled.div`
  display: flex;
  background-color: white;
`;

export const Section = styled.div`
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  width: 350px;
  flex-wrap: wrap;
`;

export const Image = styled.img`
  width: 340px;
`;

export const Title = styled.div`
  font-size: 32px;
  color: black;
  font-weight: 700;
  text-align: center;
`;
export const SubTitle = styled.div`
  font-size: 18px;
  color: black;
  text-align: center;
  line-height: 1.3;
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 64px;
  border-radius: 4px;
  background-color: #e50914;
  font-size: 24px;
  border: none;
  text-decoration: none;

  &:hover {
    background-color: #f6121d;
  }
`;