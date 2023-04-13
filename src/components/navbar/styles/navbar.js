import styled from "styled-components/macro";
import {Link} from "react-router-dom";

export const Body = styled.div`
  position: fixed;
  width: 100%;
  padding: 12px 5%;
  margin: auto;
  display: flex;
  gap: 15px;
  align-items: center;
  z-index: 99;

  &.black-bg {
    background-color: black;
  }
`;

export const TextLink = styled(Link)`
  text-decoration: none;
  margin-right: 13px;
  transition: 0.5s;
  color: rgb(255, 255, 255, 0.6);

  &: hover {
    opacity: 0.5;
  }
  &:last-of-type {
    margin: 0;
  }

  &.active {
    color: white;
  }
`;

export const Group = styled.div`
  display: flex;

  &: last-of-type {
    flex: 1;
    justify-content: right;
    gap: 20px;
  }
`;

export const NotificationIcon = styled.img`
  width: 27px;
  object-fit: contain;
  filter: invert(1);
  cursor: pointer;
`;
