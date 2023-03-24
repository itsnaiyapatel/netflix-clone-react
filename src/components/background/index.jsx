import React from "react";
import {Body, DarkFilter} from './styles/background'

export default function Background({children, bg, bgOnSmallPort, ...restProps}){
    return <Body bg={bg} bgOnSmallPort={bgOnSmallPort} {...restProps}>{children}</Body>
}

Background.DarkFilter = function BackgroundDarkFilter({children, ...restProps}){
    return <DarkFilter {...restProps}>{children}</DarkFilter>
}