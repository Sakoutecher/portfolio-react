import React from 'react';
import Avatar from '../components/Avatar';
import Text from '../components/Text'
import styled from 'styled-components'

function Description({ styles }) {
  return (
    <DescriptionContainer>
        <Center>
            <Top>
                <RightTop>
                    <Name colorText={styles.colors.text}>Hugo Campos</Name>
                    <Text 
                        styles={styles} 
                        text={'(Student in web development at Niort)'} 
                    />
                </RightTop>
                <Avatar styles={styles} />
            </Top>
            <Middle>

            </Middle>
            <Bottom>

            </Bottom>
        </Center>
    </DescriptionContainer>
  );
}

const DescriptionContainer = styled.div`
    height: 80vh;
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
`

const Top = styled.div`
    width: 100%;
    height: 20%;
    background-color: red;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Middle = styled.div`
    width: 100%;
    height: 40%;
    background-color: green;
`

const Bottom = styled.div`
    width: 100%;
    height: 40%;
    background-color: blue;
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
`

export default Description;


