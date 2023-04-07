import React, { useContext } from "react";
import { StoreContext } from "../store";
import styled from 'styled-components'
import logo from "../images/styled-component-icon.svg"
import { NavLink } from "react-router-dom";


export const Header = () => {


    const { bgColorValue: [bgColor, setBgColor], borderColorValue: [borderColor, setBorder], titleStyleValue: [Title, setStyle] } = useContext(StoreContext)

    const StyledHeader = styled.header`
  background-color: ${bgColor};
  min-height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: calc(10px + 2vmin);
  border-bottom: 2px solid ${borderColor};
`


    const Logo = styled.img`
    max-width: 75px;
`


    return (
        <StyledHeader>
            <NavLink to="/">
                <div className="header__logo-item">
                    <Logo src={logo} />
                    <Title>Styling App</Title>
                </div>
            </NavLink>
        </StyledHeader >
    )
}