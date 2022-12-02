import React from 'react';
import Avatar from '../components/Avatar';
import Resume from '../components/Resume'
import Text from '../components/Text'
import Title from '../components/Title';
import styled from 'styled-components'
import { hobbies } from '../data/DataDescription'
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom'
import uuid from 'react-uuid'

function Description({ styles, colors, language }) {
  return (
    <DescriptionContainer>
        <Center>
            <Top>
                <RightTop>
                    <Name 
                        colorText={styles.colors.text}
                    >
                        Hugo Campos
                    </Name>
                    <Text 
                        styles={styles} 
                        text={language === 'en' ? '(Student in web development at Niort)' : '(Etudiant développement web à Niort)'} 
                    />
                </RightTop>
                <Avatar styles={styles} />
            </Top>
            <Middle>
                <TopMiddle>
                    <Title 
                        text={'📝 Description'} 
                        styles={styles} 
                    />
                </TopMiddle>
                <BottomMiddle>
                    <Fade>
                        {
                            language === 'en' ?
                                <Paragraph color={styles.colors.text}>
                                    Hello everyone, i'm hcampos or hugo campos like you want 🙂. I'm a student who learning actually web development at Niort in France. I like to learn new things and to share my knowledges. I have been coding for 3 years from now, so i have done some <Link to='/projects'><DescriptionLink data-cursor textColor={colors.colorLinks.primary}>projects</DescriptionLink></Link>, i hope you will enjoy it. You can see with my portfolio all of my school career and all the things i use for the development. If you have any question or if you want to talk with me no problem, see you in the <DescriptionLink href='#contact' data-cursor textColor={colors.colorLinks.primary}>contact section</DescriptionLink> ☎️.
                                </Paragraph>
                            :
                                <Paragraph color={styles.colors.text}>
                                    Bonjour tout le monde, je suis hcampos ou hugo campos c'est comme tu veux. Je suis un étudiant qui apprend le développement web à Niort en France. J'aime apprendre de nouvelles choses et partager mes connaissances. Cela fait 3 ans maintenant que je code. Donc j'ai pu réaliser quelques <Link to='/projects'><DescriptionLink data-cursor textColor={colors.colorLinks.primary}>projets</DescriptionLink></Link>. Tu peut voir à l'aide de mon portfolio mon parcours ainsi que toutes les choses que j'utilise pour développer. Si tu as des questions ou bien que tu souhaites juste discuter pas de soucis, on se voit dans la section <DescriptionLink href='#contact' data-cursor textColor={colors.colorLinks.primary}>contact</DescriptionLink> ☎️.
                                </Paragraph>
                        }
                    </Fade>
                </BottomMiddle>
            </Middle>
            <Bottom>
                <TopBottom>
                    <Title 
                        text={language === 'en' ? '🕹 Hobbies' : '🕹 Passions'} 
                        styles={styles} 
                    />
                </TopBottom>
                <BottomBottom>
                    <Fade>
                    {hobbies.map(({ textEn, textFr }) => {
                        return (
                        <Text 
                            key={uuid()} 
                            text={language === 'en' ? textEn : textFr} 
                            styles={styles}
                        />
                        )
                    })}
                    </Fade>
                    <Link to='/projects'>
                        <ButtonLink 
                            textColor={colors.light.textColor} 
                            background={colors.colorLinks.primary} 
                            data-cursor
                        >
                            {language === 'en' ? '🚧  See my projects ' : '🚧  Jeter un oeil à mes projets'} 
                        </ButtonLink>
                    </Link>
                    <Resume 
                        styles={styles} 
                        colors={colors}
                    />
                </BottomBottom>
            </Bottom>
        </Center>
    </DescriptionContainer>
  );
}

const DescriptionContainer = styled.div`
    height: 80vh;
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
    width: 100%;
    height: 20%;
    //background-color: red;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Middle = styled.div`
    width: 100%;
    height: 40%;
    //background-color: green;
`

const Bottom = styled.div`
    width: 100%;
    height: 40%;
    //background-color: blue;
`

const RightTop = styled.div`
    height: 100%;
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
`

const Name = styled.h1`
    font-family: Cooper Black;
    color: ${props => props.colorText};
    font-size: 28px;
    letter-spacing: 2px;
`

const TopMiddle = styled.div`
    height: 20%;
    width: 100%;
    //background-color: yellow;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const BottomMiddle = styled.div`
    height: 80%; 
    width: 100%;
    //background-color: orange;
    padding-left: 3em;
    padding-right: 3em;
    margin-top: 30px;
`

const TopBottom = styled.div`
    height: 20%;
    width: 100%;
    //background-color: yellow;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const BottomBottom = styled.div`
    height: 68%; 
    width: 100%;
    //background-color: orange;
    padding-left: 3em;
    padding-right: 3em;
    margin-top: 30px;
    position: relative;
`

const ButtonLink = styled.span`
    background-color: ${props => props.background};
    color: ${props => props.textColor};
    width: 30%;
    height: 30%;
    font-family: Poppins;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    font-size: 14px;
    font-weight: 500;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    transition: background 300ms ease;
    cursor: none;

    &:hover {
        background-color: #1d9f81;
    }
`

const DescriptionLink = styled.a`
    font-family: Poppins;
    color: ${props => props.textColor} !important;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 1px;
`

const Paragraph = styled.p`
    font-family: Poppins;
    color: ${props => props.color};
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 1px;
    text-align: justify;
`

export default Description;


