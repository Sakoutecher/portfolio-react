import styled from 'styled-components'
import CopyRight from '../components/CopyRight'

const Footer = ({ styles, language }) => {
  return (
    <FooterContainer>
        <CopyRight 
            styles={styles} 
            language={language}
        />
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
    height: 8vh;
    width: 100vw;
    //background-color: violet;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default Footer