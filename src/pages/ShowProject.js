import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Title from '../components/Title'
import Text from '../components/Text'
import { FaGithub } from "react-icons/fa";

function ShowProject({ styles, colors }) {
    const page = useParams()
    const namePage = page.page

    return (
        <HardwareContainer>
            <Center>
                <CenterCenter>
                    <Top>
                        <ImgProject src={'../photo-projects/jungle-house.png'} />
                        <InfoProject>
                            <Title styles={styles} text={'jungle-house'} />
                            <Techno>
                                <ImgTechno src='../techno-icons/React.png' />
                                <ImgTechno src='../techno-icons/JS.png' />
                                <ImgTechno src='../techno-icons/TS.png' />
                                <ImgTechno src='../techno-icons/Eslint.png' />
                                <ImgTechno src='../techno-icons/Prettier.png' />
                                <ImgTechno src='../techno-icons/Sass.png' />
                            </Techno>
                            <SourceLink background={colors.colorLinks.primary} data-cursor>
                                <FaGithub style={{marginRight: '0.5em'}} />
                                Source code
                            </SourceLink>
                        </InfoProject>
                    </Top>
                    <Bottom>
                        <Text styles={styles} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id eros nec libero convallis ultrices non ac metus. Duis molestie at arcu id posuere. Fusce blandit purus non nibh condimentum lobortis. Integer lobortis, neque at mattis pellentesque, massa tortor dapibus ipsum, id tincidunt nibh diam in leo. Nam id elit mi. Nullam auctor, nibh eu tristique elementum, lorem nisl consequat libero, ac mollis purus erat sit amet mi. Cras eget diam nec arcu aliquam vehicula id in sapien. In et lorem mollis, maximus nulla at, aliquet augue. Sed porta fermentum arcu, nec viverra erat bibendum sit amet.'}/>
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

const SourceLink = styled.div`
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

    &:hover {
        background-color: #1d9f81;
    }
`

export default ShowProject