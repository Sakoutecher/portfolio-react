import styled from 'styled-components'
import ToggleTheme from '../components/ToggleTheme'
import '../fonts/font-face.css'

const Navbar = ({styles, setTheme, theme}) => {
  return (
    <Nav background={styles.colors.navbar}>
      <NavContainer>
        <Name textColor={styles.colors.text}>👋  hcampos</Name>
        <RightPart>
          <LinksContainer>
            <Links textColor={styles.colors.text}>Parcours</Links>
            <Links textColor={styles.colors.text}>Projets</Links>
            <Links textColor={styles.colors.text}>Hardware</Links>
          </LinksContainer>
          <Toggle>
            <ToggleTheme 
              theme={theme} 
              setTheme={setTheme} 
              styles={styles} 
            />
          </Toggle>
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
    backdrop-filter: blur(6px);
    background-color: ${props => props.background};
    //opacity: 0.5;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
`

const NavContainer = styled.div`
    width: 60%;
    height: 100%;
    //background-color: yellow;
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
    //background-color: green;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const LinksContainer = styled.div`
    height: 100%;
    width: 90%;
    //background-color: blue;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

const Links = styled.a`
    font-size: 16px;
    color: ${props => props.textColor};
    font-family: 'Poppins';
    font-weight: regular;
    cursor: pointer;
`

const Toggle = styled.div`
    height: 100%;
    width: 10%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

export default Navbar