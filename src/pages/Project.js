import React from 'react';
import styled from 'styled-components'
import ProjectDiv from '../components/ProjectDiv';
import Title from '../components/Title'

function Project({ styles }) {
    console.log(styles)

    return (
        <HardwareContainer>
            <Center>
                <CenterCenter>
                    <Top>
                        <Title
                            styles={styles}
                            text={'🗂️ Projects'}
                        />
                    </Top>
                    <Bottom>
                        <ProjectDiv styles={styles} />
                        <ProjectDiv styles={styles} />
                        <ProjectDiv styles={styles} />
                    </Bottom>
                </CenterCenter>
            </Center>
        </HardwareContainer>
    );
}

const HardwareContainer = styled.div`
    width: 100vw;
    //height: 80vh;
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
    height: 90%;
    width: 100%;
    //background-color: purple;
`

const Top = styled.div`
    height: 10vh;
    width: 100%;
    //background-color: yellow;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Bottom = styled.div`
    width: 100%;
    //height: 10%;
    //background-color: green;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    gap: 1em;
    margin-bottom: 1em;
`

export default Project;

