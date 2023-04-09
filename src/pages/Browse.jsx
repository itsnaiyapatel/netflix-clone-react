import React, {useState, useEffect} from "react";
import HeaderContainer from "../containers/browse/HeaderContainer";
import SelectProfileContainer from "../containers/browse/SelectProfileContainer";
import {auth} from "../config/firebase";
import {Loading} from "../components";
import {FooterContainer} from "../containers/login";
import RowContainer from "../containers/browse/RowContainer";
import axios from "../axios/axios";
import requests from '../axios/requests'

function Browse() {
  const user = auth.currentUser || {};
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);

    axios.get(`${requests.fetchTrending}`).then((res) => {      
      return setMovieList(res.data.results);
    });

  }, [profile.displayName]);

  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
      <HeaderContainer profile={profile}/>
      <RowContainer title={'Trending Now'} items={movieList}/>
      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer setProfile={setProfile} user={user} />
  );
}

export default Browse;
