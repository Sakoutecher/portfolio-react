import React from 'react';
import Text from '../components/Text'
import styled from 'styled-components'

function TechnoCateg({ styles }) {
    return (
        <Categ>
            <Text styles={styles} text={'👀 FrontEnd'} />
            <Container>
                <img src='https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white' alt='html' />
                <img src='https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white' alt='css'/>
                <img src='https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white' alt='sass'/>
                <img src='https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E' alt='javascript'/>
                <img src='https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white' alt='typescript'/>
            </Container>
        </Categ>
    );
}

const Categ = styled.p`
    width: 100%;
    //background-color: green;
    height: 20%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
`

const Container = styled.div`
    width: 100%;
    height: 70%;
    //background-color: brown;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export default TechnoCateg;

