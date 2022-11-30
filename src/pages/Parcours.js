import React from 'react';
import styled from 'styled-components'
import { itemsSchool, itemsSummerJobs, itemsITExperience } from '../data/DataParcours'
import Timeline from '../components/Timeline'
import Title from '../components/Title'
import uuid from 'react-uuid'

function Parcours({ styles, language }) {
    return (
        <ParcoursContainer>
            <Center>
                <CenterCenter>
                    <Top>
                        <Title 
                            styles={styles}
                            text={language === 'en' ? '👨‍💻 IT Experience' : '👨‍💻 Expériences informatiques'}
                        />
                    </Top>
                    <TimelineContainer>
                        <LineMid color={styles.colors.text} />
                        {itemsITExperience.map(({side, invertSide, descEn, descFr, date, bg, titleEn, titleFr}) => {
                            return (
                               <Timeline 
                                    styles={styles} 
                                    key={uuid()} 
                                    side={side}
                                    invertSide={invertSide}
                                    desc={language === 'en' ? descEn : descFr}
                                    date={date}
                                    bg={bg}
                                    title={language === 'en' ? titleEn : titleFr}
                                /> 
                            )
                        })}
                    </TimelineContainer> 
                    <Top style={{marginTop: '8em'}}>
                        <Title 
                            styles={styles}
                            text={language === 'en' ? '📚 School' : '📚 Parcours scolaires'}
                        />
                    </Top>
                    <TimelineContainer>
                        <LineMid color={styles.colors.text} />
                        {itemsSchool.map(({side, invertSide, descEn, descFr, date, bg, titleEn, titleFr}) => {
                            return (
                               <Timeline 
                                    styles={styles} 
                                    key={uuid()} 
                                    side={side}
                                    invertSide={invertSide}
                                    desc={language === 'en' ? descEn : descFr}
                                    date={date}
                                    bg={bg}
                                    title={language === 'en' ? titleEn : titleFr}
                                /> 
                            )
                        })}
                    </TimelineContainer> 
                    <Top style={{marginTop: '8em'}}>
                        <Title 
                            styles={styles}
                            text={language ==='en' ? '👨‍🌾 Summer Jobs' : `👨‍🌾 Jobs d'été`}
                        />
                    </Top>
                    <TimelineContainer style={{marginBottom: '1em'}}>
                        <LineMid color={styles.colors.text} />
                        {itemsSummerJobs.map(({side, invertSide, descEn, descFr, dateEn, dateFr, bg, titleEn, titleFr}) => {
                            return (
                               <Timeline 
                                    styles={styles} 
                                    key={uuid()} 
                                    side={side}
                                    invertSide={invertSide}
                                    desc={language === 'en' ? descEn : descFr}
                                    date={language === 'en' ? dateEn : dateFr}
                                    bg={bg}
                                    title={language === 'en' ? titleEn : titleFr}
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

