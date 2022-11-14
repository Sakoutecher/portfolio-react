import styled from 'styled-components'
import { keyframes } from 'styled-components'
import ToggleTheme from '../components/ToggleTheme'
import { Link } from 'react-router-dom'

const Navbar = ({styles, setTheme, theme}) => {
  return (
    <Nav background={styles.colors.navbar}>
      <NavContainer>
        <Link to='/'><Name textColor={styles.colors.text}><Hand>👋 </Hand> hcampos</Name></Link>
        <RightPart>
          <LinksContainer>
            <UnderlineContainer>
              <Link to='/parcours'>
                <Links textColor={styles.colors.text}>Parcours</Links>
              </Link>
            </UnderlineContainer>
            <UnderlineContainer>
              <Link to='/projects'>
                <Links textColor={styles.colors.text}>Projets</Links>
              </Link>
            </UnderlineContainer>
            <UnderlineContainer>
              <Link to='hardware'>
                <Links textColor={styles.colors.text}>Hardware</Links>
              </Link>
            </UnderlineContainer>
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

const swing = keyframes`
  20% {
    transform: rotate3d(0,0,1,15deg);
  }
  40% {
    transform: rotate3d(0,0,1,-10deg);
  }
  60% {
    transform: rotate3d(0,0,1,5deg);
  }
  80% {
    transform: rotate3d(0,0,1,-5deg);
  }
  100% {
    transform: rotate3d(0,0,1,0);
  }
`

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
    display: flex;
    align-items: center;
`

const Hand = styled.div`
  animation: ${swing} 2s ease-in-out infinite;
  margin-right: 0.3em;
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

const UnderlineContainer = styled.div`
    position: relative;

    &:before {
      content: ''
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 5px;
      background-color: red;
    }
`

const Links = styled.span`
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