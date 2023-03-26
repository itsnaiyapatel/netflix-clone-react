import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { NetflixLogo } from "../../components";
import * as ROUTE from '../../constants/routes';

const Header = styled.div`
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 25px;
    border-bottom: 3px solid #F3F3F3;
`;

const Text = styled(Link)`
    color: black;
    font-size: 19px;
    font-weight: 700;
    text-decoration: none;
    
    &:hover {
        text-decoration: underline;
    }
`;

export default function HeaderContainer(){
    return (<Header>        
        <NetflixLogo size='medium' />
        <Text to={ROUTE.LOGIN}>Sign In</Text>
    </Header>        
    );
}