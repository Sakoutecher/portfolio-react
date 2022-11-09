import styled from 'styled-components'

const CopyRight = ({ styles }) => {
  return (
    <CopyRightText 
        colorText={styles.colors.text}
    >
        © 2022 CAMPOS Hugo. All Rights Reserved.
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