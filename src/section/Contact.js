import React from 'react';
import Title from '../components/Title';
import Text from '../components/Text';
import SocialLinks from '../components/SocialLinks';
import styled from 'styled-components'

function Contact({styles, colors}) {

  const sectionText = [
    {
      key: 'first',
      text: 'Thank you for visiting ! 🙂',
    }, 

    {
      key: 'second',
      text: 'If you would like to contact me this happens just below.',
    }, 
    
    {
      key: 'third',
      text: 'Have a good day 🚀',
    },
  ]

  const externalLinks = [
    {
      title: 'github',
      link: 'https://github.com/Sakoutecher',
    },

    {
      title: 'linkedin',
      link: 'https://www.linkedin.com/in/hugo-campos-782702203/',
    },

    {
      title: 'gmail',
      link: 'mailto:hcampospro@gmail.com',
    },
  ]

  return (
    <ContactContainer>
      <Center>
        <Top>
          <Title 
            text={'📲 Contact'} 
            styles={styles} 
          />
        </Top>
        <Bottom>
          {sectionText.map(({ key, text }) => {
            return (
              <Text 
                key={key} 
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
    //margin-top: 10vh;
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
    //background-color: yellow;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const Bottom = styled.div`
    height: 70%; 
    width: 100%;
    //background-color: purple;
    padding-left: 3em;
    padding-right: 3em;
`

const SocialLinksContainer = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

export default Contact;


