import React from "react";
import { useState, useEffect } from 'react'
import styled from 'styled-components'

const colorsBg = {
  rock: "#D5D5D4",
  water:"#DEF3FD",
  electric:"#FCF7DE",
  grass:"#DEFDE0",
  poison:"#bb94bd",
  psychic:"#EAEDA1",
  fire:"#FDDFDF",
  ice:"#DEF3FD",
  fighting:"#E6E0D4",
  ghost:"#9282A4",
  dragon:"#97B3E6",
  bug:"#F8D5A3",
  normal:"#F5F5F5",
  ground:"#F4E7DA",
  fairy:"#FCEAFF",
}

const colorsType = {
  rock: "#B8A038",
  water:"#6890F0",
  electric:"#F8D030",
  grass:"#78C850",
  poison:"#A040A0",
  psychic:"#F85888",
  fire:"#F08030",
  ice:"#98D8D8",
  fighting:"#C03028",
  ghost:"#705898",
  dragon:"#7038F8",
  bug:"#B6C543",
  normal:"#B6B6A8",
  ground:"#ecdd7c",
  fairy:"#F0A8F0",
  flying:"#A890F0",
  steel: "#B8B8D0"
}
const PokemonCard = styled.div`


font-family: 'Rubik', sans-serif;
width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  padding: 1rem;
  position: relative;
  color: #22283D;
  margin: .5rem;

  img{
    background-color: #ffffff7a;
    border-radius: 50%;
  }
  & > span{
    position: absolute;
    top: 1rem;
    right: 1rem;
    color: #22283D;
    font-weight: bold;
    font-size: 2rem;
  }

  & > div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h2{
      text-transform: capitalize;
    }
    span{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      span{
        padding: .2rem;
        border-radius: 10%;
        margin: .5rem .1rem 0 .1rem;
        color: #fff;
        font-weight: 700;
        border: solid 1px rgba(0,0,0,.2);
      }
    }
  }
`
  

 


function Card(props){
    const [pokemon, setPokemon] = useState(null)
    const [characteristic, setCharacteristic] = useState(null)
    
    useEffect(()=>{
        fetch(
          `https://pokeapi.co/api/v2/pokemon/${props.pokemon}`,
          {headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }}
        )
          .then((resposta) => {
              return resposta.json();
          })
          .then((dados) => {
            setPokemon(dados);
          });
      }, []);   


  useEffect(()=>{
    if(props.pokemon <= 30){
        fetch(`https://pokeapi.co/api/v2/characteristic/${props.pokemon}`,
        {headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }}
          
        )
          .then((resposta) => {
              return resposta.json();
          })
          .then((dados) => {
            setCharacteristic(dados.descriptions[7].description);
          });}else{
  setCharacteristic("Good Friend")}
      }, []);  
      

     

       

    return(
        <>
        {pokemon && characteristic?(
         <>
        <PokemonCard  style={{backgroundColor: colorsBg[`${pokemon.types[0].type.name}`] }}>
           
           
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <span>{pokemon.id}</span>

            <div>
            <h2>{pokemon.name}</h2>
            <span>{characteristic}</span>
            <span>{pokemon.types.map(({ type }) => <span style={{backgroundColor: colorsType[`${type.name}`] }}>{type.name} </span>)}</span>
            </div>
            

        </PokemonCard>
        </>
        )

        
        : (null)}
        </>
    )
}

export default Card;