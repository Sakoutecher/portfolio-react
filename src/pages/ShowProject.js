import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Title from '../components/Title'
import Text from '../components/Text'
import { FaGithub } from "react-icons/fa";
import { portfolio, cuicuitedays, colorGuess, jungleHouse, todoReactNative, angularMatch } from '../data/DataAllProjects'
import uuid from 'react-uuid'

function ShowProject({ styles, colors, theme, language }) {
    const page = useParams()
    let usePage = ''
    if (page.page === 'portfolio') {
        usePage = portfolio
    } else if (page.page === 'cuicuitedays') {
        usePage = cuicuitedays
    } else if (page.page === 'color-guess') {
        usePage = colorGuess 
    } else if (page.page === 'todo-react-native') {
        usePage = todoReactNative
    } else if (page.page === 'angular-match') {
        usePage = angularMatch
    } else {
        usePage = jungleHouse
    }

    return (
        <HardwareContainer>
            <Center>
                <CenterCenter>
                    <Top>
                        <ImgProject 
                            src={
                                page.page === 'portfolio' ? (
                                    theme === 'light' ? usePage.imgNight : usePage.imgLight 
                                ) : usePage.img
                            } 
                        />
                        <InfoProject>
                            <Title 
                                styles={styles} 
                                text={usePage.title} 
                            />
                            <Techno>
                                {
                                   usePage.techno.map(({alt, src}) => {
                                        return (
                                            <ImgTechno 
                                                src={src} 
                                                alt={alt} 
                                                key={uuid()} 
                                            />
                                        )
                                   }) 
                                }
                            </Techno>
                            {
                                usePage.source === true ?
                                    <SourceLink 
                                        href={usePage.sourceCode} 
                                        target={'_blank'} 
                                        background={colors.colorLinks.primary} 
                                        data-cursor
                                        color={colors.light.textColor}
                                    >
                                        <FaGithub 
                                            style={{marginRight: '0.5em'}} 
                                        />
                                        {language === 'en' ? 'Source code' : 'Code source'}
                                    </SourceLink>
                                : 
                                    <SourceLink 
                                        background={'rgb(231 76 60 / 60%)'}
                                    >
                                        <FaGithub 
                                            style={{marginRight: '0.5em'}} 
                                        />
                                        {language === 'en' ? 'No source code 😩' : 'Pas de code source 😩'}
                                    </SourceLink>
                            }
                            
                        </InfoProject>
                    </Top>
                    <Bottom>
                        <Text 
                            styles={styles} 
                            text={language === 'en' ? usePage.descriptionEn : usePage.descriptionFr}
                        />
                    </Bottom>
                </CenterCenter>
            </Center>
        </HardwareContainer>
    )
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
    height: 90%;
    width: 100%;
    //background-color: purple;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
`

const Top = styled.div`
    width: 100%;
    height: 50%;
    //background-color: yellow;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`

const Bottom = styled.div`
    width: 100%;
    min-height: 30%;
    //background-color: green;
    padding: 1em 0em;
    text-align: justify;
`

const ImgProject = styled.img`
    width: 60%;
    height: 100%;
    border-radius: 16px;
`

const InfoProject = styled.div`
    width: 36%;
    height: 100%;
    //background-color: pink;
    display: flex;
    //align-items: center;
    justify-content: space-between;
    flex-direction: column;
`

const Techno = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1em;
    flex-wrap: wrap;
    //background-color: orange;
`

const ImgTechno = styled.img`
    width: 12%;
`

const SourceLink = styled.a`
    width: 100%;
    height: 26%;
    background-color: ${props => props.background};
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background 300ms ease;
    cursor: none;
    font-family: Poppins;
    font-size: 15px;
    font-weight: 500;
    text-decoration: none;
    color: ${props => props.color};

    &:hover {
        background-color: ${props => props.background + 'D7'};
    }
`

export default ShowProject