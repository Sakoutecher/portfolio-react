import React from 'react';
import styled from 'styled-components'

function ToggleTheme({styles, setTheme, theme}) {
    const handleChange = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    return (
        <ToggleBackground onClick={handleChange} hoverBackground={styles.colors.toggleColorHover} colorBackground={styles.colors.toggleColor}>
            <ToggleLogo src={`./toggle-button/${styles.colors.toggleSymbol}.svg`} alt={styles.colors.toggleSymbol} />
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

    &:hover {
        background-color: ${props => props.hoverBackground};
    }
`

const ToggleLogo = styled.img`
    width: 50%;
`
export default ToggleTheme;

