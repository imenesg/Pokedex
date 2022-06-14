import React from 'react';
import styled, { keyframes } from 'styled-components'

import pokeball from "../img/pokeball.png"


const rotation = keyframes`
    0% { transform: rotate(0deg) }
    100% { transform: rotate(360deg) }
`
const ContainerLoading = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img{
        animation: ${rotation} 1s linear infinite;
    }
    p{
      font-family: 'Rubik', sans-serif;
      font-size: 2rem;
    }
`


function Loading() {
  return(
  <ContainerLoading>
    <img src={pokeball} alt="Pokeball"></img>
    <p>Loading...</p>
  </ContainerLoading>);
}

export default Loading;