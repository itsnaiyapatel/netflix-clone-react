import React, {useEffect, useState} from "react";
import {signOut} from "firebase/auth";
import {useNavigate} from "react-router-dom";

import {auth} from "../../config/firebase";
import {Navbar, NetflixLogo, HoverDropdown} from "../../components";
import * as ROUTE from "../../constants/routes";

function NavContainer({profile}) {
  const [scrolled, setScrolled] = useState(false);
  const [clicked, setClicked] = useState("Home");

  const nav = useNavigate();

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 60) {
      return setScrolled(true);
    } else return setScrolled(false);
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => nav(ROUTE.HOME))
      .catch((e) => console.log("Sign out error --> " + e));
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar className={scrolled && "black-bg"}>
      <NetflixLogo size="medium" />
      <Navbar.Group>
        {[
          "Home",
          "TV Shows",
          "Movies",
          "New & Popular",
          "My List",
          "Browse by Languages",
        ].map((item, index) => (
          <Navbar.TextLink
            key={index}
            onClick={() => setClicked(item)}
            className={clicked == item ? "active" : ""}
          >
            {item}
          </Navbar.TextLink>
        ))}
      </Navbar.Group>
      
      <Navbar.Group>
        <Navbar.NotificationIcon onClick={() => nav(ROUTE.UNDER_CONSTRUCTION)}/>
        <HoverDropdown>
          <HoverDropdown.Selection>
            <HoverDropdown.Profile
              src={`images/users/${profile.photoURL}.png`}
              alt="user-profile"
            />
          </HoverDropdown.Selection>
          <HoverDropdown.Options>
            <HoverDropdown.Item>
              <HoverDropdown.UserPicture
                src={`images/users/${profile.photoURL}.png`}
                alt="user-profile"
              />
              <HoverDropdown.UserName>
                {profile.displayName}
              </HoverDropdown.UserName>
            </HoverDropdown.Item>
            <HoverDropdown.SignOutBtn onClick={handleSignOut}>
              Sign out of Netflix
            </HoverDropdown.SignOutBtn>
          </HoverDropdown.Options>
        </HoverDropdown>
      </Navbar.Group>
    </Navbar>
  );
}

export default NavContainer;
