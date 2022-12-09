import React from 'react';
import styled from 'styled-components'
import ProjectDiv from '../components/ProjectDiv';
import Title from '../components/Title'
import { Portfolio, Cuicuitedays, ColorGuess, JungleHouse, TodoReactNative, AngularMatch } from '../data/DataTechnoProjects'

function Project({ styles, colors, theme, language }) {
    return (
        <ProjectContainer>
            <Center>
                <CenterCenter>
                    <Top>
                        <Title
                            styles={styles}
                            text={language === 'en' ? '🗂️ Projects' : '🗂️ Projets'}
                        />
                    </Top>
                    <Bottom>
                        <ProjectDiv 
                            styles={styles} 
                            colors={colors} 
                            projects={Portfolio} 
                            title={'Portfolio'} 
                            bg={
                                theme === 'light' ? './photo-projects/portfolio-night.png' : './photo-projects/portfolio-light.png' 
                            } 
                            page={'portfolio'}
                            language={language}
                        />
                        <ProjectDiv 
                            styles={styles} 
                            colors={colors} 
                            projects={Cuicuitedays} 
                            title={'CuicuiteDays'} 
                            bg={'./photo-projects/cuicuitedays.png'} 
                            page={'cuicuitedays'}
                            language={language}
                        />
                        <ProjectDiv 
                            styles={styles} 
                            colors={colors} 
                            projects={ColorGuess} 
                            title={'Color-Guess'} 
                            bg={'./photo-projects/color-guess.png'} 
                            page={'color-guess'}
                            language={language}
                        />
                        <ProjectDiv 
                            styles={styles} 
                            colors={colors} 
                            projects={JungleHouse} 
                            title={'Jungle-House'} 
                            bg={'./photo-projects/jungle-house.png'} 
                            page={'jungle-house'}
                            language={language}
                        />
                        <ProjectDiv 
                            styles={styles} 
                            colors={colors} 
                            projects={TodoReactNative} 
                            title={'Todo-App'} 
                            bg={'./photo-projects/todo-react-native.png'} 
                            page={'todo-react-native'}
                            language={language}
                        />
                        <ProjectDiv 
                            styles={styles} 
                            colors={colors} 
                            projects={AngularMatch} 
                            title={'App-Match'} 
                            bg={'./photo-projects/match-angular.png'} 
                            page={'angular-match'}
                            language={language}
                        />
                    </Bottom>
                </CenterCenter>
            </Center>
        </ProjectContainer>
    );
}

const ProjectContainer = styled.div`
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

