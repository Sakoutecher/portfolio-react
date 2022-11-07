import styled from 'styled-components'
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
    width: 40%;
    background-color: green;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const LinksContainer = styled.div`
    height: 100%;
    width: 100%;
    background-color: blue;
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

export default Navbar