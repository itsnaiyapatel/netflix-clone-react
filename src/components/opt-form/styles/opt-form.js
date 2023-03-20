import styled from "styled-components/macro";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  margin-top: 25px;
  flex-wrap: wrap;
`;

export const Section = styled.div`
  display: flex;
  gap: 8px;

  @media (max-width: 550px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Input = styled.input`
  max-width: 400px;
  flex: 1;
  border: 0.5px solid gray;
  padding: 10px;
  height: 56px;
  background-color: transparent;
  box-sizing: border-box;
  border-radius: 0.25rem;

  ::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }

  @media (max-width: 550px) {
    width: 80%;
  }
`;
export const Button = styled.button`
  display: flex;
  cursor: pointer;
  background-color: #e50914;
  color: white;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
  height: 56px;
  font-size: 24px;
  border-radius: 0.25rem;
  border: 0;

  img {
    margin-left: 10px;
    background-color: #e50914;
    width: 24px;
    @media (max-width: 960px) {
      width: 16px;
    }
  }

  &:hover {
    opacity: 92%;
  }

  @media (max-width: 550px) {
    font-size: 18px;
    height: 40px;
  }
`;
export const Text = styled.p`
  font-size: 19.2px;
  color: white;
  text-align: center;
  display: flex;

  @media (max-width: 550px) {
    font-size: 16px;
    line-height: 22px;
  }
`;
