import React from 'react';
import styled from 'styled-components'

function Welcome({ styles }) {
  return (
    <WelcomeContainer>
        <Center>
          <Hightlight 
            textColor={styles.colors.text} 
            background={styles.colors.highlight}
          >
            Hello, i am hcampos an french web developper based in Niort 👋 
          </Hightlight>
        </Center>
    </WelcomeContainer>
  );
}

const WelcomeContainer = styled.div`
    height: 70vh;
    width: 100vw;
    //background-color: purple;
    margin-top: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Center = styled.div`
    height: 90%;
    width: 60%;
    //background-color: blue;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    background: url('./welcome-image/welcome.webp');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 11px;
    position: relative;
`

const Hightlight = styled.h1`
    background: ${props => props.background};
    height: 12%;
    width: 80%;
    border-radius: 15px;
    position: absolute;
    bottom: 15%;
    left: 50%;
    transform: translateX(-50%);
    color: ${props => props.textColor};
    font-family: Poppins;
    font-weight: 600;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default Welcome;


