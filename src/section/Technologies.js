import React from 'react';
import Title from '../components/Title';
import TechnoCateg from '../components/TechnoCateg'
import styled from 'styled-components'

function Technologies({ styles }) {
  return (
    <TechnologiesContainer>
        <Center>
            <Top>
            <Title 
                text={'📟 Technologies & Other'} 
                styles={styles} 
            />
            </Top>
            <Bottom>
            
            </Bottom>
        </Center>
    </TechnologiesContainer>
  );
}

const TechnologiesContainer = styled.div`
    height: 85vh;
    width: 100vw;
    background-color: purple;
    margin-top: 15vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Center = styled.div`
    height: 100%;
    width: 60%;
    background-color: blue;
`

const Top = styled.div`
    height: 10%;
    width: 100%;
    background-color: yellow;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const Bottom = styled.div`
    height: 90%; 
    width: 100%;
    background-color: orange;
    padding-left: 3em;
    padding-right: 3em;
    margin-top: 30px;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
`

export default Technologies;


