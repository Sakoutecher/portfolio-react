import React from 'react';
import styled from 'styled-components'
import { keyframes } from 'styled-components'
import { useState } from 'react'

function ToggleLanguage({ colors, language, setLanguage }) {

    const [active, setActive] = useState(false)

    const handleChange = () => {
        setLanguage(language === 'en' ? 'fr' : 'en')
        setActive(true)
    }

    return (
        <ToggleBackground 
            data-cursor
            onClick={handleChange} 
            colorBackground={colors.colorLinks.primary}
            onAnimationEnd={() => setActive(false)}
            isActive={active}
        >
            {
                language === 'en' ? '🇫🇷' : '🇬🇧'
            }
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
        background-color: #1d9f81;
    }
`

export default ToggleLanguage;

