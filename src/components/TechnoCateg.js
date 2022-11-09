import React from 'react';
import styled from 'styled-components'

function TechnoCateg({}) {
    return (
        <Paragraph></Paragraph>
    );
}

const Paragraph = styled.p`
    font-family: Poppins;
    color: ${props => props.color};
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 1px;
`

export default TechnoCateg;

