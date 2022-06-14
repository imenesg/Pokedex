import { useState, useEffect } from 'react'
import styled from 'styled-components'
import GlobalStyle from './components/GlobalStyle';

import Card from './components/Card';

import Loading from './components/Loading';

const AllCards = styled.div`
 @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap');
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
 
function App() {
  const [allpokemons, setPokemons] = useState(null)

  
  function Api(){
    const limit = 150; //numero de pokemons desejados
    useEffect(()=>{
        fetch(
          `https://pokeapi.co/api/v2/pokemon/?limit=${limit}`,
          {headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }}
        )
          .then((resposta) => {
              return resposta.json();
          })
          .then((dados) => {
            setPokemons(dados.results)
          }).catch(() => console.log("erro"));
      },[]);    
};Api()


  return (
    <>
    
    <AllCards>
     {allpokemons? (
      <>
        {allpokemons.map((pokemon, i) =>{
          return <Card key={i} pokemon={i+1}></Card> 
        })}
      </>

     ): (<Loading />)}
    </AllCards>
    </>
  )
}

export default App
