import styled from "styled-components/macro";

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  height: 100%;
  margin-top: 20px;
  flex-wrap: wrap;
  // border: 1px solid red;
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const Input = styled.input`
  max-width: 450px;
  width: 100%;
  border: 0.5px solid gray;
  padding: 10px;
  height: 60px;
  background-color: transparent;
  box-sizing: border-box;
  border-radius: 0.25rem;
  ::placeholder {
    color: white;
  }
`;
export const Button = styled.button`
  display: flex;
  cursor: pointer;
  background-color: #e50914;
  color: white;
  align-items: center;
  height: 60px;
  padding: 0 32px;
  font-size: 24px;
  border-radius: 0.25rem;
  border: 0;

  img {
    margin-left: 10px;
    // filter: brightness(0) invert(1);
    // color: white;
    background-color: #e50914;
    width: 24px;
    @media (max-width: 1000px) {
      width: 16px;
    }
  }

  &:hover {
    background: #f40612;
  }
  @media (max-width: 1000px) {
    height: 50px;
    font-size: 16px;
    margin-top: 20px;
    font-weight: bold;
  }
`;
export const Text = styled.p`
  font-size: 19.2px;
  color: white;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;
