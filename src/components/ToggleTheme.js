import React from 'react';
import styled from 'styled-components'
import { keyframes } from 'styled-components'
import { useState } from 'react'

function ToggleTheme({styles, setTheme, theme}) {

    const [active, setActive] = useState(false)

    const handleChange = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
        setActive(true)
    }

    return (
        <ToggleBackground 
            data-cursor
            onClick={handleChange} 
            hoverBackground={styles.colors.toggleColorHover} 
            colorBackground={styles.colors.toggleColor}
            onAnimationEnd={() => setActive(false)}
            isActive={active}
        >
            <ToggleLogo 
                data-cursor
                src={`./toggle-button/${styles.colors.toggleSymbol}.svg`} 
                alt={styles.colors.toggleSymbol} 
            />
        </ToggleBackground>
    );
}

const slideDown = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(7px);
  }
  100% {
    transform: translateY(0px);
  }
`

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
    animation: ${props => props.isActive ? slideDown : null} 0.3s linear;
    cursor: none;

    &:hover {
        background-color: ${props => props.hoverBackground};
    }
`

const ToggleLogo = styled.img`
    width: 50%;
`
export default ToggleTheme;

