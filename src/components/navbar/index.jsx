import React from "react";
import {Body, TextLink, Group} from './styles/navbar' 

export default function Navbar({children, ...restProps}){
    

    return <Body {...restProps}> 
        {children}
    </Body>
}

Navbar.TextLink = function NavbarTextLink({children, ...restProps}) {
    return <TextLink {...restProps}>{children}</TextLink>;
  };

Navbar.Group = function NavbarGroup({children, ...restProps}) {
    return <Group {...restProps}>{children}</Group>;
  };


