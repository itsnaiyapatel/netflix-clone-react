import React from "react";
import { Logo } from "./styles/logo";

export default function NetflixLogo({size, ...restProps}){
    return <Logo size={size} src='images/logo/netflix-logo.png' {...restProps} />
}