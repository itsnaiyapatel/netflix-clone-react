import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.75);

  &.sign-up-page {
    background-color: #f3f3f3;
  }

  @media (max-width: 740px) {
    border-top: ${({topBorder}) => `${topBorder ? "1px solid gray" : "none"};`};
  }
`;

export const Body = styled.div`
  margin: 5%;
  display: flex;
  flex-direction: column;
  max-width: 1200px;

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
