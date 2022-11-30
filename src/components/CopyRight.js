import styled from 'styled-components'

const CopyRight = ({ styles, language }) => {
  return (
    <CopyRightText 
        colorText={styles.colors.text}
    >
        {language === 'en' ? '© 2022 CAMPOS Hugo. All Rights Reserved.' : '© 2022 CAMPOS Hugo. Tous droits réservés.'}
    </CopyRightText>
  )
}

const CopyRightText = styled.h4`
    font-family: Poppins;
    font-size: 14px;
    font-weight: 300;
    color: ${props => props.colorText};
    opacity: 0.3;
`

export default CopyRight