import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  padding: 5%;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: auto;
`;

export const Section = styled.div`
  font-size: 18px;
  color: rgba(255, 255, 255, 0.7);
  display: flex;
  gap: 15px;
  padding: 20px 0;
`;

export const SubSection = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const CustomLink = styled.a`
  width: 280px;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 20px;
  font-size: 14px;
  cursor: pointer;
  text-decoration: underline;

  @media (max-width: 960px) {
    width: 200px;
  }
`;
