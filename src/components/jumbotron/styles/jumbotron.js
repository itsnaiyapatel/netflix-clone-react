import styled from "styled-components";

export const Item = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
  padding: 5%;
`;

export const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  flex-direction: ${({direction}) => direction};
  max-width: 1200px;
  margin: auto;
  width: 100%;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  font-weight: 900;
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

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

export const Section = styled.div`
  width: 50%;

  @media (max-width: 960px) {
    width: 100%;
    padding: 0 45px;
    text-align: center;
  }
`;
