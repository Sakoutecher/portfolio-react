import React from 'react';
import styled from 'styled-components'

function Welcome() {
  return (
    <WelcomeContainer>
        <Center>

        </Center>
    </WelcomeContainer>
  );
}

const WelcomeContainer = styled.div`
    height: 90vh;
    width: 100vw;
    background-color: purple;
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
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
`

export default Welcome;


