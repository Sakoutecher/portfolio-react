import React from 'react'
import uuid from 'react-uuid'
import styled from 'styled-components'
import Text from '../components/Text'

function ProjectDiv({ styles, colors, projects, title, bg }) {
  return (
    <Item text={title} color={styles.colors.text} background={colors.colorLinks.primary} imgBg={bg} data-cursor>
      <Bottom backgroundColor={colors.colorLinks.primary}>
        <Text styles={styles} text={'Technologies'} />
        <TechnoContainer>
          {projects.map(({alt, src}) => (
            <Logo key={uuid()} src={src} alt={alt} />
          ))}
        </TechnoContainer>
      </Bottom>
    </Item>
  )
}

const Item = styled.div`
  height: 23em;
  width: 45%;
  background: url('${props => props.imgBg}');
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
    //background-color: red;
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
  width: 1.4em;
`

export default ProjectDiv