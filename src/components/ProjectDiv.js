import React from 'react'
import styled from 'styled-components'
import Text from '../components/Text'

function ProjectDiv({ styles, colors }) {
  return (
    <Item text={'Portfolio'} color={styles.colors.text} background={colors.colorLinks.primary} data-cursor>
      <Bottom backgroundColor={colors.colorLinks.primary}>
        <Text styles={styles} text={'Technologies'} />
        <TechnoContainer>
          <Logo src='./techno-icons/JS.png' />
          <Logo src='./techno-icons/Node.png' />
          <Logo src='./techno-icons/Prettier.png' />
          <Logo src='./techno-icons/React.png' />
          <Logo src='./techno-icons/StyledComponent.png' />
          <Logo src='./techno-icons/TS.png' />
        </TechnoContainer>
      </Bottom>
    </Item>
  )
}

const Item = styled.div`
  height: 23em;
  width: 45%;
  background: url('./photo-projects/portfolio.jpeg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  margin-left: 1em;
  margin-right: 1em;
  margin-top: 1em;
  margin-bottom: 0.6em;
  border-radius: 8px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  position: relative;

  &::before {
    content: '${props => props.text}';
    position: absolute;
    padding: 0.6em 1.5em;
    top: 1.5em;
    left: 1.5em;
    background-color: red;
    border-radius: 8px;
    font-family: Cooper Black;
    color: ${props => props.color};
    background-color: ${props => props.background + '61'};
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 2px;
    backdrop-filter: blur(5px);
  }
`

const Bottom = styled.div`
  height: 25%;
  width: 100%;
  background-color: ${props => props.backgroundColor + '61'}; 
  border-radius: 0px 0px 8px 8px;
  backdrop-filter: blur(5px);
  padding: 15px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.3em;
`

const TechnoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1em;
`

const Logo = styled.img`
  width: 1.2em;
`

const ProjectTitle = styled.h3`
  font-family: Cooper Black;
  color: ${props => props.color};
  position: relative;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 15px 30px;
  background-color: ${props => props.background + '61'};
  backdrop-filter: blur(5px);
  border-radius: 8px 8px 0px 0px;
`

export default ProjectDiv