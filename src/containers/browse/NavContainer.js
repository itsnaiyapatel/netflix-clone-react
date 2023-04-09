import React, {useEffect, useState} from "react";
import {Navbar, NetflixLogo} from "../../components";

function NavContainer({profile}) {
  const [scrolled, setScrolled] = useState(false);
  const [clicked, setClicked] = useState('Home');

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 60) {
      return setScrolled(true);
    } else return setScrolled(false);
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
      <NetflixLogo size="small" />
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
            className={clicked == item ? 'active' : ''}
          >
            {item}
          </Navbar.TextLink>
        ))}
      </Navbar.Group>
      <Navbar.Group>
        <Navbar.TextLink>{profile.displayName}</Navbar.TextLink>
      </Navbar.Group>
    </Navbar>
  );
}

export default NavContainer;
