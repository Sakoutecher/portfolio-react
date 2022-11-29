import React from 'react';
import styled from 'styled-components'
import { items } from '../data/DataParcours'
import Timeline from '../components/Timeline'

function Parcours({ styles }) {
    return (
        <ParcoursContainer>
            <Center>
                <CenterCenter>
                    <Timeline styles={styles} />
                </CenterCenter>
            </Center>
        </ParcoursContainer>
    );
}

const ParcoursContainer = styled.div`
    width: 100vw;
    //height: 80vh;
    margin-top: 13vh;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Center = styled.div`
    height: 100%;
    width: 60%;
    background-color: blue;
    display: flex;
    justify-content: center;
    align-items: center;
`

const CenterCenter = styled.div`
    height: 95%;
    width: 100%;
    background-color: purple;
`

export default Parcours;

