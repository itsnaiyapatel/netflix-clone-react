import styled from "styled-components/macro";

export const Body = styled.div`
  display: flex;
  margin: 50px 5%;
  flex-direction: column;
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
  width: 250px;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 20px;
  font-size: 14px;
  cursor: pointer;
  text-decoration: underline;
`;
