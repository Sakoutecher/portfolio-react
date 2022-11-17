import React from 'react';
import Title from '../components/Title';
import Text from '../components/Text';
import SocialLinks from '../components/SocialLinks';
import { externalLinks, sectionText } from '../data/DataContact'
import styled from 'styled-components'
import uuid from 'react-uuid'

function Contact({styles, colors}) {
  return (
    <ContactContainer id='contact'>
      <Center>
        <Top>
          <Title 
            text={'📲 Contact'} 
            styles={styles} 
          />
        </Top>
        <Bottom>
          {sectionText.map(({ text }) => {
            return (
              <Text 
                key={uuid()} 
                text={text} 
                styles={styles}
              />
            )
          })}
          <SocialLinksContainer>
          {externalLinks.map(({ title, link }) => (
            <SocialLinks 
              key={title} 
              colorLinks={colors.colorLinks.primary} 
              alt={title} 
              links={link} 
            />
          ))}
          </SocialLinksContainer>
        </Bottom>
      </Center>
    </ContactContainer>
  );
}

const ContactContainer = styled.div`
    height: 30vh;
    width: 100vw;
    //background-color: red;
    margin-top: 15vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Center = styled.div`
    height: 100%;
    width: 60%;
    //background-color: blue;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
`

const Top = styled.div`
    height: 20%;
    width: 100%;
    background-color: yellow;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const Bottom = styled.div`
    height: 80%; 
    width: 100%;
    //background-color: purple;
    padding-left: 3em;
    padding-right: 3em;
    margin-top: 30px;
`

const SocialLinksContainer = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

export default Contact;


