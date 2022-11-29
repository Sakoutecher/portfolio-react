import React from 'react';
import styled from 'styled-components'
import { itemsSchool, itemsSummerJobs, itemsITExperience } from '../data/DataParcours'
import Timeline from '../components/Timeline'
import Title from '../components/Title'
import uuid from 'react-uuid'

function Parcours({ styles }) {
    return (
        <ParcoursContainer>
            <Center>
                <CenterCenter>
                    <Top>
                        <Title 
                            styles={styles}
                            text={'📚 School'}
                        />
                    </Top>
                    <TimelineContainer>
                        <LineMid color={styles.colors.text} />
                        {itemsSchool.map(({side, invertSide, desc, date, bg, title}) => {
                            return (
                               <Timeline 
                                    styles={styles} 
                                    key={uuid()} 
                                    side={side}
                                    invertSide={invertSide}
                                    desc={desc}
                                    date={date}
                                    bg={bg}
                                    title={title}
                                /> 
                            )
                        })}
                    </TimelineContainer> 
                    <Top style={{marginTop: '8em'}}>
                        <Title 
                            styles={styles}
                            text={'👨‍🌾 Summer Jobs'}
                        />
                    </Top>
                    <TimelineContainer>
                        <LineMid color={styles.colors.text} />
                        {itemsSummerJobs.map(({side, invertSide, desc, date, bg, title}) => {
                            return (
                               <Timeline 
                                    styles={styles} 
                                    key={uuid()} 
                                    side={side}
                                    invertSide={invertSide}
                                    desc={desc}
                                    date={date}
                                    bg={bg}
                                    title={title}
                                /> 
                            )
                        })}
                    </TimelineContainer> 
                    <Top style={{marginTop: '8em'}}>
                        <Title 
                            styles={styles}
                            text={'👨‍💻 IT Experience'}
                        />
                    </Top>
                    <TimelineContainer>
                        <LineMid color={styles.colors.text} />
                        {itemsITExperience.map(({side, invertSide, desc, date, bg, title}) => {
                            return (
                               <Timeline 
                                    styles={styles} 
                                    key={uuid()} 
                                    side={side}
                                    invertSide={invertSide}
                                    desc={desc}
                                    date={date}
                                    bg={bg}
                                    title={title}
                                /> 
                            )
                        })}
                    </TimelineContainer> 
                </CenterCenter>
            </Center>
        </ParcoursContainer>
    );
}

const ParcoursContainer = styled.div`
    width: 100vw;
    min-height: 80vh;
    margin-top: 10vh;
    //background-color: red;
    display: flex;
    justify-content: center;
    align-items: flex-start;
`

const Center = styled.div`
    height: 100%;
    width: 60%;
    //background-color: blue;
    display: flex;
    justify-content: center;
    align-items: center;
`

const CenterCenter = styled.div`
    height: 95%;
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
const TimelineContainer = styled.div`
    width: 100%;
    //background-color: green;
    position: relative;
    display: flex;
    gap: 1em;
    align-items: center;
    flex-direction: column;
`

const LineMid = styled.div`
    position: absolute;
    height: 100%;
    width: 1%;
    background-color: ${props => props.color};
    top: 0;
    left: 50;
    z-index: 100;
`

export default Parcours;

