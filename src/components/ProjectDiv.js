import React from 'react'
import styled from 'styled-components'

function ProjectDiv({ styles }) {
  console.log(styles)

  return (
    <Item>
      <Bottom>

      </Bottom>
    </Item>
  )
}

const Item = styled.div`
  height: 15em;
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
  flex-direction: column
`

const Bottom = styled.div`
  height: 40%;
  width: 100%;
  border-radius: 0px 0px 8px 8px;
`

export default ProjectDiv