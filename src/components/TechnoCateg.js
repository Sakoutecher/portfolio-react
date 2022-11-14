import React from 'react'
import Text from '../components/Text'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Fade from 'react-reveal/Fade'
import uuid from 'react-uuid'
import '../css/style.css'

function TechnoCateg({ styles, title, links }) {

    const starfullstyle = {
        stroke: styles.colors.star,
        strokeWidth: '50',
    }

    return (
        <Categ>
            <Text 
                styles={styles} 
                text={title} 
            />
            <Line 
                color={styles.colors.text} 
            />
            <Container>
                {links.map(({ title, link, star}) => (
                    <Fade top key={uuid()}>
                    <SmallContainer 
                        key={uuid()}
                    >
                        <Tech 
                            key={uuid()}
                            src={link} 
                            alt={title} 
                        />
                            {star === '1' ?
                            <Star 
                            key={uuid()}
                                background={styles.colors.text}
                            > 
                                <FontAwesomeIcon 
                                    icon={faStar} 
                                    color={'#3BC3A4'} 
                                    size='xs'
                                    style={starfullstyle}
                                    key={uuid()}
                                /> 
                                <FontAwesomeIcon 
                                    icon={faStar} 
                                    color={styles.colors.background} 
                                    size='xs' 
                                    key={uuid()}
                                />
                                <FontAwesomeIcon 
                                    icon={faStar} 
                                    color={styles.colors.background} 
                                    size='xs'
                                    key={uuid()}
                                />
                            </Star>
                            : star === '2' ?
                            <Star 
                                key={uuid()}
                                background={styles.colors.text}
                            > 
                                <FontAwesomeIcon 
                                    icon={faStar} 
                                    color={'#3BC3A4'} 
                                    size='xs'
                                    style={starfullstyle}
                                    key={uuid()}
                                /> 
                                <FontAwesomeIcon 
                                    icon={faStar} 
                                    color={'#3BC3A4'} 
                                    size='xs' 
                                    style={starfullstyle}
                                    key={uuid()}
                                />
                                <FontAwesomeIcon 
                                    icon={faStar} 
                                    color={styles.colors.background} 
                                    size='xs'
                                    key={uuid()}
                                />
                            </Star>
                            : star === '3' ?
                            <Star 
                                key={uuid()}
                                background={styles.colors.text}
                            > 
                                <FontAwesomeIcon 
                                    icon={faStar} 
                                    color={'#3BC3A4'} 
                                    size='xs'
                                    style={starfullstyle}
                                    key={uuid()}
                                /> 
                                <FontAwesomeIcon 
                                    icon={faStar} 
                                    color={'#3BC3A4'} 
                                    size='xs' 
                                    style={starfullstyle}
                                    key={uuid()}
                                />
                                <FontAwesomeIcon 
                                    icon={faStar} 
                                    color={'#3BC3A4'} 
                                    size='xs'
                                    style={starfullstyle}
                                    key={uuid()}
                                />
                            </Star>
                            : 
                            <Star 
                                key={uuid()}
                                background={styles.colors.text}
                            > 
                                <FontAwesomeIcon 
                                    icon={faStar} 
                                    color={styles.colors.background} 
                                    size='xs'
                                    key={uuid()}
                                /> 
                                <FontAwesomeIcon 
                                    icon={faStar} 
                                    color={styles.colors.background} 
                                    size='xs' 
                                    key={uuid()}
                                />
                                <FontAwesomeIcon 
                                    icon={faStar} 
                                    color={styles.colors.background} 
                                    size='xs'
                                    key={uuid()}
                                />
                            </Star>
                            }
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

const SmallContainer = styled.div `
    position: relative;
    cursor: none;

    &:hover {
        ${Star} {
          transform: translateY(-120%);
          opacity: 1;
        }        
    }
`

export default TechnoCateg;

