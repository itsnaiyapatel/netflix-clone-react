import {Link} from "react-router-dom";
import FloatingInput from '../../floating-input'
import styled from "styled-components";

export const Body = styled.div``;

export const Base = styled.form`
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  width: 450px;
  height: 660px;
  margin: auto auto 50px;
  padding: 60px 68px 40px;
  gap: 70px;

  @media (max-width: 740px) {
    width: 100%;
    padding: 5%;
    height: 500px;
  } 
`;

export const Section = styled.div`ic
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 28px;
`;
export const Input = styled(FloatingInput)`
  background: #333;
  border-radius: 4px;
  border: none;
  color: #fff;
  margin-bottom: 5px;
  width: 100%;
`;

export const Button = styled.button`
  background: #e50914;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  margin: 24px 0 12px;
  padding: 15px;
  border: none;
  color: white;
  cursor: pointer;
  width: 100%;
`;

export const SubSection = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const CustomLink = styled(Link)`
  color: #737373;
  cursor: pointer;
  text-decoration: none;
  font-size: 0.8rem;
  &:hover {
    text-decoration: underline;
  }
`;

export const Text = styled.div`
  color: #737373;
  font-size: ${({size}) => size};
`;

export const Error = styled.div`
  background-color: orange;
  color: white; 
  padding: 15px;
  border-radius: 4px;
  


`;

export const ErrorText = styled.p`
  font-size: 14px;
  color: orange;
`;


