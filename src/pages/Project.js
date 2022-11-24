import React from 'react';
import styled from 'styled-components'
import ProjectDiv from '../components/ProjectDiv';
import Title from '../components/Title'
import { Portfolio, Cuicuitedays, ColorGuess, JungleHouse } from '../data/DataProjects'
import { Routes, Route } from 'react-router-dom'

function Project({ styles, colors }) {
    return (
        <>
            <Routes>
                <Route path='/' element={
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
                                    <ProjectDiv 
                                        styles={styles} 
                                        colors={colors} 
                                        projects={Portfolio} 
                                        title={'Portfolio'} 
                                        bg={'./photo-projects/portfolio.png'} 
                                    />
                                    <ProjectDiv 
                                        styles={styles} 
                                        colors={colors} 
                                        projects={Cuicuitedays} 
                                        title={'CuicuiteDays Website'} 
                                        bg={'./photo-projects/cuicuitedays.png'} 
                                    />
                                    <ProjectDiv 
                                        styles={styles} 
                                        colors={colors} 
                                        projects={ColorGuess} 
                                        title={'Color-Guess Game'} 
                                        bg={'./photo-projects/color-guess.png'} 
                                    />
                                    <ProjectDiv 
                                        styles={styles} 
                                        colors={colors} 
                                        projects={JungleHouse} 
                                        title={'Jungle-House Site'} 
                                        bg={'./photo-projects/jungle-house.png'} 
                                    />
                                </Bottom>
                            </CenterCenter>
                        </Center>
                    </HardwareContainer>
                }/>
            </Routes>
        </>
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

