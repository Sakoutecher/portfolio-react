import React from 'react';
import styled from 'styled-components'

function Title({styles, text}) {
    return (
        <Titleh2 color={styles.colors.text}>{text}</Titleh2>
    );
}

const Titleh2 = styled.h2`
    font-family: Cooper Black;
    color: ${props => props.color};
    position: relative;
    font-size: 16px;
    text-transform: uppercase;

    &:before {
        content: '';
        position: absolute; 
        width: 100%;
        height: 3px;
        background-color: ${props => props.color};
        bottom: -4px;
        left: 0;
    }
`

export default Title;

