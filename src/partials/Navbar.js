import styled from 'styled-components'
import { useState, useEffect } from 'react'
import '../fonts/font-face.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'

const Navbar = ({styles}) => {
  return (
    <Nav background={styles.colors.background}>
      <NavContainer>
        <Name textColor={styles.colors.text}>👋  hcampos</Name>
        <RightPart>
          <LinksContainer>
    
          </LinksContainer>
          <ToggleTheme></ToggleTheme>
        </RightPart>
      </NavContainer>
    </Nav>
  )
}

const Nav = styled.nav`
    width: 100%;
    height: 10vh;
    position: fixed;
    top: 0;
    backdrop-filter: blur(5px);
    background-color: red;
    //opacity: 0.5;
    display: flex;
    justify-content: center;
    align-items: center;
`

const NavContainer = styled.div`
    width: 60%;
    height: 100%;
    background-color: yellow;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Name = styled.h1`
    font-size: 20px;
    letter-spacing: 4px;
    color: ${props => props.textColor};
    font-family: Cooper Black Regular;
`

const RightPart = styled.div`
    height: 100%;
    width: 60%;
    background-color: green;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const LinksContainer = styled.div`
    height: 100%;
    width: 70%;
    background-color: blue;
`

const ToggleTheme = styled.button`
    height: 50px;
    width: 50px;
    background-color: orange;
`

const Links = styled.a`
    font-size: 1em;
    color: white;
`

export default Navbar