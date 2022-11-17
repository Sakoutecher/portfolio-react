import React from 'react'
import styled from 'styled-components'
import { keyframes } from 'styled-components'

function Loader() {
  return (
    <LoaderContainer>
      <Name><Hand>👋 </Hand> hcampos</Name>
    </LoaderContainer>
  )
}

const swing = keyframes`
  20% {
    transform: rotate3d(0,0,1,15deg);
  }
  40% {
    transform: rotate3d(0,0,1,-10deg);
  }
  60% {
    transform: rotate3d(0,0,1,5deg);
  }
  80% {
    transform: rotate3d(0,0,1,-5deg);
  }
  100% {
    transform: rotate3d(0,0,1,0);
  }
`

const LoaderContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #21252D;
  z-index: 150;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Name = styled.h1`
    font-size: 20px;
    letter-spacing: 4px;
    color: #D9D9D9;
    font-family: Cooper Black;
    display: flex;
    align-items: center;
    cursor: none;
`

const Hand = styled.div`
  animation: ${swing} 2s ease-in-out infinite;
  margin-right: 0.3em;
`

export default Loader