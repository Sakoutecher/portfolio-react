import React from 'react'
import Text from '../components/Text'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Fade from 'react-reveal/Fade'
import uuid from 'react-uuid'
import '../css/style.css'

function TechnoCateg({ styles, title, links, filter }) {
    const starfullstyle = {
        stroke: styles.colors.star,
        strokeWidth: '50',
    }

    const showGap = filter === '1' || filter === '2' || filter === '3' ? 'none' : '1em'

    const marginFilter = filter === '1' || filter === '2' || filter === '3' ? '1em' : 'none'

    return (
        <Categ>
            <Text 
                styles={styles} 
                text={title} 
            />
            <Line 
                color={styles.colors.text} 
            />
            <Container
                filter={showGap}
            >
                {links.map(({ title, link, star, delay}) => (
                    <Fade top key={uuid()}>
                    <SmallContainer 
                        key={uuid()}
                    >
                        {filter === 'noStar' ? 
                            <>
                                <Tech 
                                    key={uuid()}
                                    src={link} 
                                    alt={title}
                                />
                                <Star 
                                    key={uuid()}
                                    background={styles.colors.text}
                                > 
                                    <FontAwesomeIcon 
                                        icon={faStar} 
                                        color={star === '1' || star === '2' || star === '3' ? '#3BC3A4' : styles.colors.background} 
                                        size='xs'
                                        style={star === '1' || star === '2' || star === '3' ? starfullstyle : ''}
                                        key={uuid()}
                                    /> 
                                    <FontAwesomeIcon 
                                        icon={faStar} 
                                        color={star === '2' || star === '3' ? '#3BC3A4' : styles.colors.background} 
                                        size='xs' 
                                        style={star === '2' || star === '3' ? starfullstyle : ''}
                                        key={uuid()}
                                    />
                                    <FontAwesomeIcon 
                                        icon={faStar} 
                                        color={star === '3' ? '#3BC3A4' : styles.colors.background} 
                                        size='xs'
                                        style={star === '3' ? starfullstyle : ''}
                                        key={uuid()}
                                    />
                                </Star>
                            </>
                            : filter === star ? 
                            <>
                                <Tech 
                                    key={uuid()}
                                    src={link} 
                                    alt={title} 
                                    marginFilter={marginFilter}
                                />
                                <Star 
                                key={uuid()}
                                    background={styles.colors.text}
                                > 
                                    <FontAwesomeIcon 
                                        icon={faStar} 
                                        color={star === '1' || star === '2' || star === '3' ? '#3BC3A4' : styles.colors.background} 
                                        size='xs'
                                        style={star === '1' || star === '2' || star === '3' ? starfullstyle : ''}
                                        key={uuid()}
                                    /> 
                                    <FontAwesomeIcon 
                                        icon={faStar} 
                                        color={star === '2' || star === '3' ? '#3BC3A4' : styles.colors.background} 
                                        size='xs' 
                                        style={star === '2' || star === '3' ? starfullstyle : ''}
                                        key={uuid()}
                                    />
                                    <FontAwesomeIcon 
                                        icon={faStar} 
                                        color={star === '3' ? '#3BC3A4' : styles.colors.background} 
                                        size='xs'
                                        style={star === '3' ? starfullstyle : ''}
                                        key={uuid()}
                                    />
                                </Star>
                            </>
                            : ''}
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
    gap: ${props => props.filter};
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
    margin-right: ${props => props.marginFilter}; 
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

