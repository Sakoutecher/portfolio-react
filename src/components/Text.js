import React from 'react';
import styled from 'styled-components'

function Text({styles, text}) {
    return (
        <Paragraph color={styles.colors.text}>{text}</Paragraph>
    );
}

const Paragraph = styled.p`
    font-family: Poppins;
    color: ${props => props.color};
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 1px;
`

export default Text;

