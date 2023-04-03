import React, {useEffect, useState} from "react";
import {Background} from "../../components";
import NavContainer from "./NavContainer";
import axios from "../../axios/axios";
import requests from "../../axios/requests";
import {
  backgroundStyle,
  PlayButton,
  Title,
  Feature,
  MoreDetailsButton,
  Buttons,
} from "./HeaderContainerStyles";

function HeaderContainer({profile}) {
  const [randomMovie, setRandomMovie] = useState({});

  useEffect(() => {
    axios.get(`${requests.fetchTrending}`).then((res) => {
      const randomNumber =
        Math.floor(Math.random() * res.data.results.length) + 1;
      const movie = res.data.results[randomNumber];
      return setRandomMovie(movie);
    });
  }, []);

  return (
    <>
      <Background
        bg={`https://image.tmdb.org/t/p/original${randomMovie?.backdrop_path}`}
        style={backgroundStyle}
        bgOnSmallPort
      >
        <NavContainer profile={profile} />
        <Feature>
          <Title>{randomMovie.title || randomMovie.name}</Title>
          <Buttons>
          <PlayButton>Play</PlayButton>
          <MoreDetailsButton>More details</MoreDetailsButton>
        </Buttons>
        </Feature>
       
      </Background>
    </>
  );
}

export default HeaderContainer;
