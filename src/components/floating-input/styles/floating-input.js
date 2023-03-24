import styled from "styled-components/macro";

export const Label = styled.label`

  position: absolute;
  pointer-events: none;
  transform: translate(0, 23px) scale(1);
  transform-origin: top left;
  transition: 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  color: gray;
  font-size: 16px;
  line-height: 1;
  left: 16px;

  &.filled {
    transform: translate(0, 12px) scale(0.8);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 15px;

`;

export const Input = styled.input`
  height: 56px;
  border-radius: 4px;
  border: none;
  padding: 24px 16px 4px 16px;
  font-size: 16px;
  line-height: 1;
  outline-offset: 1px;
  box-shadow: none;
  transition: 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  border: 1px solid gray;
  background-color: transparent;

  &:focus {
    outline: 1px solid white;
  }

  &:focus + ${Label} {
    opacity: 1;
    transform: translate(0, 12px) scale(0.8);
  }

  &.input-error {
    outline: 0;
    border-bottom: 3px solid orange;
  }
`;
