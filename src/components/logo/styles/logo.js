import styled from "styled-components/macro";

const handleSize = (size) => {
  if (size === "small") {
    return "width: 100px";
  } else if (size === "medium") {
    return "width: 160px";
  } else if (size === "large") {
    return "width: 200px";
  } else {
    return `width: ${size}`;
  }
};

export const Logo = styled.img`
  width: 160px;
  ${({size}) => handleSize(size)}
  
`;
