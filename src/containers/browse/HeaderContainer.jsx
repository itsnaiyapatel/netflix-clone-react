import React, {useEffect, useState} from "react";

import {Background, Feature} from "../../components";
import {NavContainer} from "./index";
import axios from "../../axios/axios";
import requests from "../../axios/requests";
import {backgroundStyle} from "./HeaderContainerStyles";

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
        mediaQueryStyle={'background-size: contain; height: 45vh !important;'}
      >
        <NavContainer profile={profile} />
        <Feature>
          <Feature.Title>{randomMovie.title || randomMovie.name}</Feature.Title>
          <Feature.Buttons>
            <Feature.PlayButton>Play</Feature.PlayButton>
            <Feature.MoreInfoButton>More Info</Feature.MoreInfoButton>
          </Feature.Buttons>
        </Feature>
      </Background>
    </>
  );
}

export default HeaderContainer;
