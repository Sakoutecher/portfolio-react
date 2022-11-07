import React from 'react';
import styled from 'styled-components'

function ToggleTheme({styles}) {
    return (
        <ToggleBackground hoverBackground={styles.colors.toggleColorHover} colorBackground={styles.colors.toggleColor}>
            <ToggleLogo src={`./${styles.colors.toggleSymbol}.svg`} alt={styles.colors.toggleSymbol} />
        </ToggleBackground>
    );
}

const ToggleBackground = styled.button`
    height: 40px;
    width: 40px;
    background-color: ${props => props.colorBackground};
    border-radius: 12px;
    cursor: pointer;
    border: none;
    display: flex; 
    justify-content: center;
    align-items: center;
    transition: background 300ms ease;
    position: fixed;
    bottom: 30px;
    right: 30px;

    &:hover {
        background-color: ${props => props.hoverBackground};
    }
`

const ToggleLogo = styled.img`
    width: 50%;
`
export default ToggleTheme;

