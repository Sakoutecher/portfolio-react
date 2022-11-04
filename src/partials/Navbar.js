import styled from 'styled-components'
import { useState, useEffect } from 'react'

const Navbar = ({styles}) => {
  return (
    <Nav color={styles.background}></Nav>
  )
}

const Nav = styled.nav`
    width: 100%;
    height: 10vh;
    position: fixed;
    top: 0;
    backdrop-filter: blur(5px);
    background-color: ${props => props.color};
    opacity: 0.5;
`



export default Navbar