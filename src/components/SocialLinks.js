import React from 'react';
import styled from 'styled-components'

function SocialLinks({links, alt, colorLinks}) {
    return (
        <BackLinks 
            background={colorLinks} 
            target={'_blank'} 
            href={links}
            data-cursor
        >
            <ImgLinks 
                src={`./social-links/${alt}.svg`} 
                alt={alt} 
                data-cursor
            />
        </BackLinks>
    );
}

const BackLinks = styled.a`
    height: 60px;
    width: 60px;
    background-color: ${props => props.background};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1.5em;
    border-radius: 12px;
    transition: background 300ms ease;
    cursor: none;

    &:hover {
        background-color: #1d9f81;
    }
`

const ImgLinks = styled.img`
    width: 45%;
    cursor: none;
`

export default SocialLinks;

