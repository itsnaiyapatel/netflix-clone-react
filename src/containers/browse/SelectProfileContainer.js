import React from "react";
import {Header, NetflixLogo, Profiles} from "../../components";

function SelectProfileContainer({user, setProfile}) {
  return (
    <>
      <NetflixLogo size="medium" style={{margin: "2.5% 5% 5%"}} />
      <Profiles>
        <Profiles.Title>Who's watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User
            onClick={() =>
              setProfile({
                displayName: user.displayName,
                photoURL: user.photoURL,
              })
            }
          >
            <Profiles.ProfileImage src={user.photoURL} />
            <Profiles.Name>{user.displayName}</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
        <Profiles.Button>Manage profiles</Profiles.Button>
      </Profiles>
    </>
  );
}

export default SelectProfileContainer;
