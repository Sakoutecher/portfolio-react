import React from 'react';
import Text from '../components/Text'
import styled from 'styled-components'

function TechnoCateg({ styles, title, links }) {
    return (
        <Categ>
            <Text styles={styles} text={title} />
            <Line color={styles.colors.text} />
            <Container>
                {links.map(({ title, link }) => (
                    <img key={title} src={link} alt={title} />
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

export default TechnoCateg;

