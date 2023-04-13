import React, {useState, useEffect} from "react";

import {
  HeaderContainer,
  SelectProfileContainer,
  SlidesContainer,
} from "../containers/browse/";
import {auth} from "../config/firebase";
import {Loading} from "../components";
import {FooterContainer} from "../containers/login";

function Browse() {
  const user = auth.currentUser || {};
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
      <HeaderContainer profile={profile} />
      <SlidesContainer />
      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer setProfile={setProfile} user={user} />
  );
}

export default Browse;
