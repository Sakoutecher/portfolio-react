import React from 'react';
import Title from '../components/Title';
import TechnoCateg from '../components/TechnoCateg'
import styled from 'styled-components'
import { TechnoLinksLanguages, TechnoLinksFramework, TechnoLinksFront, TechnoLinksBack } from '../data/ListTechno';

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
                    <TechnoCateg 
                        title={'👀 FrontEnd'} 
                        styles={styles} 
                        links={TechnoLinksFront} 
                    />
                    <TechnoCateg 
                        title={'🔐 BackEnd'} 
                        styles={styles} 
                        links={TechnoLinksBack} 
                    />
                    <TechnoCateg 
                        title={'🧰 Framework & Librairies'} 
                        styles={styles} 
                        links={TechnoLinksFramework} 
                    />
                    <TechnoCateg 
                        title={'🌐 Languages'} 
                        styles={styles} 
                        links={TechnoLinksLanguages} 
                    />
                </Bottom>
            </Center>
        </TechnologiesContainer>
    );
}

const TechnologiesContainer = styled.div`
    height: 110vh;
    width: 100vw;
    //background-color: purple;
    margin-top: 15vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Center = styled.div`
    height: 100%;
    width: 60%;
    //background-color: blue;
`

const Top = styled.div`
    height: 10%;
    width: 100%;
    //background-color: yellow;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const Bottom = styled.div`
    height: 90%; 
    width: 100%;
    //background-color: orange;
    padding-left: 3em;
    padding-right: 3em;
    margin-top: 30px;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
`

export default Technologies;


