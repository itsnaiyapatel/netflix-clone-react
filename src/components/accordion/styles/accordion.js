import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
  padding: 50px 5%;
`;
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`;
export const Title = styled.h1`
  font-size: 48px;
  text-align: center;
  margin-bottom: 8px;
  @media (max-width: 800px) {
    font-size: 35px;
  }
`;
export const Content = styled.div`
  margin: 20px 0;

  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: 20px;
  flex-wrap: wrap;
`;

export const Item = styled.div`
  margin-bottom: 10px;
`;
export const Question = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 1px;
  font-size: 26px;
  font-weight: normal;
  background-color: #303030;
  padding: 0.8em 1.2em 0.8em 1.2em;
  align-items: center;
  :hover {
    background-color: #404040;
  }
  img {
    width: 30px;
    background-color: transparent;

    @media (max-width: 600px) {
      width: 20px;
    }
  }
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;
export const Answer = styled.div`
  font-size: 26px;
  font-weight: normal;
  line-height: normal;
  background-color: #303030;
  white-space: pre-wrap;
  overflow: hidden;
  &.closed {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
  }
  &.open {
    max-height: 1200px;
    transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
  }
  span {
    display: block;
    padding: 0.8em 2.2em 0.8em 1.2em;
    background-color: #303030;
  }
  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;
