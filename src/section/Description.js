import React from 'react';
import Avatar from '../components/Avatar';
import Resume from '../components/Resume'
import Text from '../components/Text'
import Title from '../components/Title';
import styled from 'styled-components'

function Description({ styles, colors }) {

  const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis lorem pulvinar, eleifend ex vitae, varius erat. Proin commodo libero ligula, quis aliquam nulla fringilla sed. Quisque euismod orci ut ipsum mattis tempus. Curabitur metus lectus, congue nec nunc placerat, efficitur lacinia risus. Sed vitae lectus in sem pulvinar fringilla. Donec lacinia ut nisi vitae accumsan. Vestibulum pulvinar eget justo nec porta. Curabitur justo nibh, malesuada in porttitor ut, cursus nec nulla. Fusce lobortis ultrices tincidunt. Phasellus laoreet lacus sapien.'

  const hobbies = [
    {
      key: 'first',
      text: '• Development',
    }, 

    {
      key: 'second',
      text: '• Gaming',
    }, 
    
    {
      key: 'third',
      text: '• Streaming',
    },

    {
      key: 'fourth',
      text: '• See some friends 🤙',
    },
  ]

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
                        text={'(Student in web development at Niort)'} 
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
                    <Text 
                        styles={styles} 
                        text={description} 
                    />
                </BottomMiddle>
            </Middle>
            <Bottom>
                <TopBottom>
                    <Title 
                        text={'🕹 Hobbies'} 
                        styles={styles} 
                    />
                </TopBottom>
                <BottomBottom>
                    {hobbies.map(({ key, text }) => {
                        return (
                        <Text 
                            key={key} 
                            text={text} 
                            styles={styles}
                        />
                        )
                    })}
                    <ButtonLink 
                        textColor={colors.light.textColor} 
                        background={colors.colorLinks.primary} 
                        href='#'
                    >
                        🚧  See my projects 
                    </ButtonLink>
                    <Resume 
                        styles={styles} 
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
    margin-top: 10vh;
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

const ButtonLink = styled.a`
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

    &:hover {
        background-color: #1d9f81;
    }
`

export default Description;


