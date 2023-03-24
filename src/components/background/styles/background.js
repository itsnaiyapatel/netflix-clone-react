import styled from "styled-components/macro";

const handleImg = (img) => {
    const defaultImg = "images/header/header-background.jpg";
    if (typeof img !== "undefined") {
      if (img === true || img === defaultImg) {
        return defaultImg;
      } else return img;
    }
    return null;
  };

export const Body = styled.div`
  background-size: cover;
  background-image: ${({bg}) => `linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8) 0,
    rgba(0, 0, 0, 0) 60%,
    rgba(0, 0, 0, 0.8) 100%
  ),
  url(${handleImg(bg)});`};

  @media (max-width: 740px) {
    ${({bgOnSmallPort}) => `${!bgOnSmallPort && "background: none;"}`}
  }
`;
export const DarkFilter = styled.div`
  background: rgb(0 0 0 / 40%);
`;
