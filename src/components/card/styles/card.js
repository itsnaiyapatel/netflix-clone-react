import styled from "styled-components/macro";

export const HoverCard = styled.div`
  visibility: hidden;
  position: absolute;
  top: 0px;
  left: -75px;
  width: 300px;
  height: 100%;
  background: #141414;
  flex-direction: column;
  z-index: 10;
  transition: 0s visibility;
`;
export const Body = styled.div`
  position: relative;
  width: 165px;
  padding: 10px;
  height: 350px;
  padding-top: 80px;

  &:hover ${HoverCard} {
    display: flex;
    cursor: pointer;
    visibility: visible;
    transition-delay: 1.5s;
  }
`;

export const HoverPlayButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  overflow: hidden;
  padding-left: 3px;
  cursor: pointer;
  border: none;

  & img {
    width: 15px;
    height: 15px;
    object: contain;
  }

  &:hover {
    opacity: 0.8;
  }
`;

export const HoverAddButton = styled(HoverPlayButton)`
  border: 2px solid gray;
  background: #141414;
  padding: 0;

  & img {
    width: 20px;
    height: 20px;
    filter: invert(0);
  }
  &:hover {
    opacity: 1;
    border: 2px solid white;
  }
`;

export const HoverButtons = styled.div`
  display: flex;
  padding: 10px;
  gap: 5px;

  & button:last-of-type {
    margin-left: 125px;
  }
`;

export const HoverLikeButton = styled(HoverAddButton)``;

export const HoverMoreInfoButton = styled(HoverAddButton)`
  & img {
    width: 15px;
    height: 15px;
    transform: rotate(90deg);
  }
`;

export const HoverDetails1 = styled.div``;
export const HoverDetails2 = styled.div``;

export const Poster = styled.img`
  z-index: -1;
  width: 150px;
  object: contain;
  cursor: pointer;
`;


export const HoverPoster = styled.img`
  width: 300px;
  object: contain;
`;
