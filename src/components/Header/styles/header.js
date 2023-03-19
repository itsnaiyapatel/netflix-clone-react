import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  padding: 50px 5%;
  border-bottom: 8px solid #222;
  overflow: hidden;
`;
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid red;
  width: 100%;
  // max-width: 1000px;
  margin: auto;
`;
export const Section = styled.div`
  border: 1px solid green;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const SubSection = styled.div`
  display: flex;
  gap: 10px;
`;
export const Logo = styled.div``;
export const Button = styled.div``;

export const Title = styled.h1`
  font-size: 32px;
  text-align: center;
  margin-bottom: 8px;
  @media (max-width: 800px) {
    font-size: 35px;
  }
`;
export const SubTitle = styled.div``;
