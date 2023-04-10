import styled from "styled-components/macro";

export const Body = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 5%;
`;
export const Title = styled.h1`
  position: absolute;
  top: 30px;
  font-size: 24px;
  color: white;
`;
export const ItemList = styled.div`
  display: flex;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;
