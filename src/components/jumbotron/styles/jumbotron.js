import styled from "styled-components";

export const Item = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
  padding: 50px 5%;
  color: white;
`;

export const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  flex-direction: ${({direction}) => direction};
  max-width: 1100px;
  margin: auto;
  width: 100%;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  line-height: 1.1;
  margin-bottom: 8px;
  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const SubTitle = styled.h2`
  font-size: 24px;
  font-weight: normal;
  line-height: normal;
  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

export const Section = styled.div`
  width: 50%;
  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 45px;
    text-align: center;
  }
`;