import React from 'react';
import Title from '../components/Title';
import styled from 'styled-components'

function Contact({styles, externalLinks}) {
  return (
    <ContactContainer>
      <Center>
        <Top>
          <Title text={'Contact'} styles={styles} />
        </Top>
      </Center>
    </ContactContainer>
  );
}

const ContactContainer = styled.div`
    height: 35vh;
    width: 100vw;
    background-color: red;
    margin-top: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Center = styled.div`
    height: 100%;
    width: 60%;
    background-color: blue;
    display: flex;
    justify-content: center;
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

export default Contact;


