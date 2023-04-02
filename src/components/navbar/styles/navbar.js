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

  &.black-bg {
    background-color: black;
  }
`;

export const TextLink = styled(Link)`
  text-decoration: none;
  margin-right: 13px;
  
  &: hover {
    transform: scale(1.07);
  }
  &:last-of-type {
    margin: 0;
  }
`;

export const Group = styled.div`
  display: flex;
  &: last-of-type {
    flex: 1;
    justify-content: right;
  }
`;
