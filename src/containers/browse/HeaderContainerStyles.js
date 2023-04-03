import styled from "styled-components/macro";

export const backgroundStyle = {
  height: "100vh",
};

export const Feature = styled.div`
  padding: 25% 5% 20px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: white;
  font-size: 50px;
  line-height: normal;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0;

  @media (max-width: 740px) {
    font-size: 28px;
  }
`;

export const PlayButton = styled.button`
  box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
  background-color: #e6e6e6;
  color: #000;
  border-width: 0;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 20px;
  margin-top: 10px;
  cursor: pointer;
  transition: background-color 0.5s ease;
  &:hover {
    background-color: #ff1e1e;
    color: white;
  }

  @media (max-width: 740px) {
    font-size: 14px;
    padding: 7px 12px;
  }
`;

export const MoreDetailsButton = styled(PlayButton)`
  background-color: rgba(255, 255, 255, 0.5);
`;

export const Buttons = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  min-width: 150px;
`;
