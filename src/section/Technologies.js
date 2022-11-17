import React from 'react';
import Title from '../components/Title';
import TechnoCateg from '../components/TechnoCateg'
import styled from 'styled-components'
import { TechnoLinksLanguages, TechnoLinksFramework, TechnoLinksFront, TechnoLinksBack } from '../data/DataTechno';
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import '../css/style.css'

function Technologies({ styles }) {

    const [filter, setFilter] = useState('noStar')

    const starborder = {
        stroke: styles.colors.text,
        strokeWidth: '35',
        cursor: 'none',
    }

    return (
        <TechnologiesContainer>
            <Center>
                <Top>
                    <Title 
                        text={'📟 Technologies & Other'} 
                        styles={styles} 
                    />
                    <FilterContainer
                        data-cursor
                        strokeColor={styles.colors.text}
                    >
                        <FontAwesomeIcon 
                            icon={faStar} 
                            color={styles.colors.background} 
                            size='lg' 
                            style={starborder}
                            data-cursor
                            onClick={() => setFilter('noStar')}
                        />
                        <FontAwesomeIcon 
                            icon={faStar} 
                            color={filter === '1' || filter === '2' || filter === '3' ? '#3BC3A4' : styles.colors.background} 
                            size='lg' 
                            style={starborder}
                            data-cursor
                            onClick={() => setFilter('1')}
                            className='test'
                        />
                        <FontAwesomeIcon 
                            icon={faStar} 
                            color={filter === '2' || filter === '3' ? '#3BC3A4' : styles.colors.background} 
                            size='lg' 
                            style={starborder}
                            data-cursor
                            onClick={() => setFilter('2')}
                        />
                        <FontAwesomeIcon 
                            icon={faStar} 
                            color={filter === '3' ? '#3BC3A4' : styles.colors.background} 
                            size='lg' 
                            style={starborder}
                            data-cursor
                            onClick={() => setFilter('3')}
                        />
                    </FilterContainer>
                </Top>
                <Bottom>
                    <TechnoCateg 
                        title={'👀 FrontEnd'} 
                        styles={styles} 
                        links={TechnoLinksFront} 
                        filter={filter}
                    />
                    <TechnoCateg 
                        title={'🔐 BackEnd'} 
                        styles={styles} 
                        links={TechnoLinksBack} 
                        filter={filter}
                    />
                    <TechnoCateg 
                        title={'🧰 Framework & Librairies'} 
                        styles={styles} 
                        links={TechnoLinksFramework} 
                        filter={filter}
                    />
                    <TechnoCateg 
                        title={'🌐 Languages'} 
                        styles={styles} 
                        links={TechnoLinksLanguages} 
                        filter={filter}
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
    justify-content: space-between;
    align-items: center;
`

const FilterContainer = styled.div`
    height: 80%;
    width: 15%;
    //background-color: red;
    display: flex; 
    justify-content: space-evenly;
    align-items: center;
    position: relative;

    &::before {
        position: absolute;
        top: 51%;
        left: 7.5%;
        width: 18px;
        height: 2px;
        background-color: ${props => props.strokeColor};
        content: '';
        transform: rotate(-55deg);
    }
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


