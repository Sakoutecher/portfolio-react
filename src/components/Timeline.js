import React from 'react'
import styled from 'styled-components'

function Timeline() {
  return (
    <TimelineContainer>
        <LineMid />
        <CardContainer>
            <Card side={'left'} invertSide={'right'}>

            </Card>
        </CardContainer>
        <CardContainer>
            <Card side={'right'} invertSide={'left'}>

            </Card>
        </CardContainer>
        <CardContainer>
            <Card side={'left'} invertSide={'right'}>

            </Card>
        </CardContainer>
    </TimelineContainer>
  )
}

const TimelineContainer = styled.div`
    width: 100%;
    background-color: green;
    position: relative;
    display: flex;
    gap: 1em;
    align-items: center;
    flex-direction: column;
`

const CardContainer = styled.div`
    width: 100%;
    height: 250px;
    background-color: yellow;
    position: relative;
`

const Card = styled.div`
    position: absolute;
    ${props => props.side}: 0;
    width: 45%;
    height: 100%;
    background-color: blue;

    &::after {
        position: absolute;
        content: '';
        top: calc(50% - 12.5px);
        height: 25px;
        width: 25px;
        background-color: green;
        border-radius: 50%;
        ${props => props.invertSide}: -14.5%;
        transfrom: translate(-50%, 0);
        z-index: 150;
    }
`

const LineMid = styled.div`
    position: absolute;
    height: 100%;
    width: 1%;
    background-color: blue;
    top: 0;
    left: 50;
    z-index: 100;
`

export default Timeline