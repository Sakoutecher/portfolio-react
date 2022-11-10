import React from 'react';
import Text from '../components/Text'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function TechnoCateg({ styles, title, links }) {
    return (
        <Categ>
            <Text styles={styles} text={title} />
            <Line color={styles.colors.text} />
            <Container>
                {links.map(({ title, link }) => (
                    <SmallContainer>
                        <Tech key={title} src={link} alt={title} />
                        <Star background={styles.colors.text}>
                            <FontAwesomeIcon icon={faStar} color={'#3BC3A4'} size='xs'/>
                            <FontAwesomeIcon icon={faStar} color={'#3BC3A4'} size='xs' />
                            <FontAwesomeIcon icon={faStar} color={styles.colors.background} size='xs'/>
                        </Star>
                    </SmallContainer>
                ))}
            </Container>
            <Line color={styles.colors.text} />
        </Categ>
    );
}

const Categ = styled.p`
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
    cursor: pointer;
`

const SmallContainer = styled.div `
    position: relative;
    cursor: pointer;

    &:hover ${Star} {
        opacity: 1;
    }
`

const Star = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${props => props.background + 'D5'};
    top: 0; 
    left: 0;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    gap: 0.5em;
    align-items: center;
    opacity: 0;
    transition: all 300ms ease;
`

export default TechnoCateg;

