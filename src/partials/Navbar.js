import styled from 'styled-components'
import { useState, useEffect } from 'react'
import '../fonts/font-face.css'

const Navbar = ({styles}) => {
  return (
    <Nav background={styles.colors.background}>
      <NavContainer>
        <Name textColor={styles.colors.text}>👋  hcampos</Name>
        <RightPart>
          <LinksContainer>
            <Links textColor={styles.colors.text}>Parcours</Links>
            <Links textColor={styles.colors.text}>Projets</Links>
            <Links textColor={styles.colors.text}>Hardware</Links>
          </LinksContainer>
          <ToggleContainer>
            <ToggleTheme />
          </ToggleContainer>
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
    font-family: Cooper Black;
`

const RightPart = styled.div`
    height: 100%;
    width: 50%;
    background-color: green;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const LinksContainer = styled.div`
    height: 100%;
    width: 80%;
    background-color: blue;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

const ToggleTheme = styled.button`
    height: 40px;
    width: 40px;
    background-color: orange;
    border-radius: 12px;
`

const Links = styled.a`
    font-size: 16px;
    color: ${props => props.textColor};
    font-family: 'Poppins';
    font-weight: regular;
    cursor: pointer;
`

const ToggleContainer = styled.div`
    height: 100%;
    width: 20%;
    background-color: purple;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default Navbar