import styled from "styled-components/macro";

export const UserPicture = styled.img`
  width: 40px;
  border-radius: 5px;
`;
export const UpArrowIcon = styled.img`
  width: 20px;
  height: 15px;
  filter: invert(1);
  transform: rotate(180deg);
`;

export const Container = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const Options = styled.div`
  visibility: hidden;
  display: flex;
  position: absolute;
  top: 0;
  left: -200px;
  width: 300px;
  cursor: pointer;

  padding: 50px 15px;
  flex-direction: column;

  & ${UpArrowIcon} {
    position: relative;
    transform: rotate(0deg);
    left: 193px;
  }
`;

export const Selection = styled.div`
  cursor: pointer;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid gray;
  background: rgb(0, 0, 0, 0.8);
`;

export const Body = styled.div`
  display: flex;
  position: relative;

  &:hover ${Options} {
    visibility: visible;
  }

  &:hover ${UpArrowIcon} {
    transform: rotate(0deg);
  }
`;

export const UserName = styled.h3`
  color: white;
`;

export const Item = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  padding: 5%;
`;

export const SignOutBtn = styled.div`
  text-align: center;
  padding: 6%;
  border-top: 1px solid gray;
`;
