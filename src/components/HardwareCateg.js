import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import '../css/style.css'
import uuid from 'react-uuid'

function TechnoCateg({ styles, title, links }) {
    return (
        <Categ>
            <Titleh2 color={styles.colors.text}>
                {title}
            </Titleh2>
            <Line 
                color={styles.colors.text} 
            />
            <Container>
                {links.map(({ title, link }) => (
                    <Fade top key={uuid()}>
                        <SmallContainer key={uuid()}>
                            <Tech 
                                src={link} 
                                alt={title}
                                key={uuid()}
                            />
                        </SmallContainer>
                    </Fade>
                ))}
            </Container>
            <Line 
                color={styles.colors.text} 
            />
        </Categ>
    );
}

const Categ = styled.div`
    width: 100%;
    //background-color: green;
    //height: 20%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    margin-bottom: 2em;
`

const Container = styled.div`
    width: 100%;
    height: 70%;
    //background-color: brown;
    display: flex;
    justify-content: flex-start;
    gap: 1em;
    align-items: center;
    flex-wrap: wrap;
`

const Line = styled.hr`
    width: 100%;
    opacity: 0.3;
    margin-top: 1.3em;
    margin-bottom: 1.3em;
    padding: 0;
    color: ${props => props.color};
`

const Tech = styled.img`
    position: relative;
    cursor: none;
`

const SmallContainer = styled.div `
    position: relative;
    cursor: none;
`

const Titleh2 = styled.h2`
    font-family: Cooper Black;
    color: ${props => props.color};
    position: relative;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 2px;
`

export default TechnoCateg;

