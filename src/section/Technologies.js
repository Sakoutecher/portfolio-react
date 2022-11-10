import React from 'react';
import Title from '../components/Title';
import TechnoCateg from '../components/TechnoCateg'
import styled from 'styled-components'

function Technologies({ styles }) {

    const TechnoLinksFront = [
        {
            title: 'html',
            link: 'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white',
            star: '3',
        },
    
        {
            title: 'css',
            link: 'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white',
            star: '3',
        },
    
        {
            title: 'sass',
            link: 'https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white',
            star: '3',
        },
    
        {
            title: 'javascript',
            link: 'https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E',
            star: '2',
        },
    
        {
            title: 'typescript',
            link: 'https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white',
            star: '1',
        },
    ]
    
    const TechnoLinksBack = [
        {
            title: 'mariadb',
            link: 'https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white',
            star: '2',
        },
    
        {
            title: 'mysql',
            link: 'https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white',
            star: '2',
        },
    
        {
            title: 'php',
            link: 'https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white',
            star: '3',
        },
    ]
    
    const TechnoLinksFramework = [
        {
            title: 'apache',
            link: 'https://img.shields.io/badge/Apache-D22128?style=for-the-badge&logo=Apache&logoColor=white',
            star: '1',
        },
    
        {
            title: 'chart.js',
            link: 'https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white',
            star: '1',
        },
    
        {
            title: 'fontawesome',
            link: 'https://img.shields.io/badge/Font_Awesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white',
            star: '3',
        },
    
        {
            title: 'githubpages',
            link: 'https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=GitHub%20Pages&logoColor=white',
            star: '2',
        },
    
        {
            title: 'jquery',
            link: 'https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white',
            star: '1',
        },
    
        {
            title: 'laragon',
            link: 'https://img.shields.io/badge/Laragon-0E83CD?style=for-the-badge&logo=Laragon&logoColor=white',
            star: '2',
        },
    
        {
            title: 'node.js',
            link: 'https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white',
            star: '2',
        },
    
        {
            title: 'mocha',
            link: 'https://img.shields.io/badge/Mocha-8D6748?style=for-the-badge&logo=Mocha&logoColor=white',
            star: '1',
        },
    
        {
            title: 'npm',
            link: 'https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white',
            star: '2',
        },
    
        {
            title: 'react',
            link: 'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB',
            star: '2',
        },
    
        {
            title: 'reactrouter',
            link: 'https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white',
            star: '1',
        },
       
        {
            title: 'xampp',
            link: 'https://img.shields.io/badge/Xampp-F37623?style=for-the-badge&logo=xampp&logoColor=white',
            star: '3',
        },
    
        {
            title: 'yarn',
            link: 'https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white',
            star: '2',
        },
    ]
    
    const TechnoLinksLanguages = [
        {
            title: 'french',
            link: 'https://img.shields.io/badge/French-Native-blue?style=for-the-badge',
            star: '3',
        },
    
        {
            title: 'english',
            link: 'https://img.shields.io/badge/English-B2-blue?style=for-the-badge',
            star: '3',
        },
    ]
    
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


