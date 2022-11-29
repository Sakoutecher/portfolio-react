import React from 'react'
import styled from 'styled-components'
import Title from '../components/Title'
import Text from '../components/Text'

function Timeline({ styles, side, invertSide, date, desc, bg, title }) {
  return (
    <CardContainer>
        <Card side={side} invertSide={invertSide} dotColor={styles.colors.text} bg={bg}>
            <CardTop background={styles.colors.background} >
                <Date color={styles.colors.text}>
                    {date}
                </Date>
            </CardTop>
            <CardBottom background={styles.colors.background}>
                <Name color={styles.colors.text}>
                    {title}
                </Name>
                <Text 
                    styles={styles}
                    text={desc}
                />
            </CardBottom>
        </Card>
    </CardContainer>
  )
}

const CardContainer = styled.div`
    width: 100%;
    height: 250px;
    //background-color: yellow;
    position: relative;
`

const Card = styled.div`
    position: absolute;
    ${props => props.side}: 0;
    width: 45%;
    height: 100%;
    //background-color: blue;
    background: url(${props => props.bg});
    background-size: cover;
    background-position: center;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;

    &::after {
        position: absolute;
        content: '';
        top: calc(50% - 12.5px);
        height: 25px;
        width: 25px;
        background-color: ${props => props.dotColor};
        border-radius: 50%;
        ${props => props.invertSide}: -14.5%;
        transfrom: translate(-50%, 0);
    }

    &::before {
        position: absolute;
        content: '';
        top: calc(50% - 12.5px);
        height: 25px;
        width: 25px;
        background-color: ${props => props.dotColor};
        ${props => props.invertSide}: -3.5%;
        transform: rotate(45deg);
        z-index: -1;
    }
`

const CardTop = styled.div`
    background-color: ${props => props.background + 'C4'};
    width: auto;
    border-radius: 8px;
    height: 20%;
    display: flex;
    align-items: center;
    padding: 1em;
    margin-top: 1em;
    margin-left: 1em;
    backdrop-filter: blur(5px);
`

const CardBottom = styled.div`
    width: 100%;
    height: 40%;
    background-color: ${props => props.background + 'C4'};
    padding: 1em;
    backdrop-filter: blur(5px);
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Name = styled.h4`
    color: ${props => props.color};
    font-size: 16px;
`

const Date = styled.h2`
    font-family: Poppins;
    color: ${props => props.color};
    position: relative;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 2px;

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

export default Timeline