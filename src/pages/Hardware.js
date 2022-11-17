import React from 'react';
import styled from 'styled-components'
import HardwareCateg from '../components/HardwareCateg'
import { HardwareLink, UseLink } from '../data/DataHardware'

function Hardware({ styles }) {
    return (
        <HardwareContainer>
            <Center>
                <CenterCenter>
                    <HardwareCateg 
                        title={'💻 HARDWARE'} 
                        styles={styles} 
                        links={HardwareLink} 
                    />
                    <HardwareCateg 
                        title={'🔨 WHAT DID I USE'} 
                        styles={styles} 
                        links={UseLink} 
                    />
                </CenterCenter>
            </Center>
        </HardwareContainer>
    );
}

const HardwareContainer = styled.div`
    width: 100vw;
    height: 80vh;
    margin-top: 10vh;
    //background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Center = styled.div`
    height: 100%;
    width: 60%;
    //background-color: blue;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const CenterCenter = styled.div`
    height: 70%;
    width: 100%;
    //background-color: purple;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
`

export default Hardware;

