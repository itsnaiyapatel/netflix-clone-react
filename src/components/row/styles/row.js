import styled from "styled-components/macro";

export const Body = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const Title = styled.h1`
  position: absolute;
  top: 30px;
  font-size: 24px;
  color: white;
  margin: 0 5%;
`;
export const ItemList = styled.div`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  margin-right: 5%;

  &::-webkit-scrollbar {
    display: none;
  }
`;
