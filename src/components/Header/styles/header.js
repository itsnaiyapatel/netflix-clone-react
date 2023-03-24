import {Link} from "react-router-dom";
import styled from "styled-components/macro";

export const Container = styled.div`
  padding: 2.5% 5% 10%;
`;

export const Body = styled.div`
  height: 80vh;
  display: flex;
  gap: 25vh;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  margin: auto;
`;

export const Section = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SubSection = styled.div`
  display: flex;
  gap: 10px;
`;
export const Logo = styled.img`
  width: 160px;

  @media (max-width: 960px) {
    width: 100px;
  }
`;
export const Button = styled(Link)`
  display: flex;
  cursor: pointer;
  background-color: #e50914;
  align-items: center;
  padding: 6px 20px;
  border-radius: 0.25rem;
  border: 0;
  text-decoration: none;
`;

export const Title = styled.h1`
  font-size: 48px;
  font-weight: 900;
  text-align: center;
  margin-bottom: 8px;

  @media (max-width: 960px) {
    font-size: 32px;
    font-weight: 700;
  }
`;
export const SubTitle = styled.div`
  font-size: 24px;

  @media (max-width: 960px) {
    font-size: 18px;
  }
`;

export const GrayBorder = styled.div`
  width: 100%;
  border-bottom: 8px solid #222;
`;
