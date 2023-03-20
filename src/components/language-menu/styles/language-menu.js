import styled from "styled-components/macro";

export const Body = styled.div`
  padding: 5px;
  border: 0.5px solid gray;
  border-radius: 3px;
  color: gray;
  background: transparent;
  display: flex;
`;

export const Select = styled.select`
  border: none;
  background: transparent;
`;

export const Option = styled.option`
  height: 50px;
`;

export const Logo = styled.img`
  width: 20px;
  object-fit: contain;
  filter: invert(1);
`;
