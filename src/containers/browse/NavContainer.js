import React, {useEffect, useState} from "react";
import {Navbar, NetflixLogo} from "../../components";

function NavContainer({profile}) {
  const [scrolled, setScrolled] = useState(false);

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
        <Navbar.TextLink>Home</Navbar.TextLink>
        <Navbar.TextLink>TV Shows</Navbar.TextLink>
        <Navbar.TextLink>Movies</Navbar.TextLink>
        <Navbar.TextLink>New & Popular</Navbar.TextLink>
        <Navbar.TextLink>My List</Navbar.TextLink>
        <Navbar.TextLink>Browse by Languages</Navbar.TextLink>
      </Navbar.Group>
      <Navbar.Group>
        <Navbar.TextLink>{profile.displayName}</Navbar.TextLink>
      </Navbar.Group>
    </Navbar>
  );
}

export default NavContainer;
