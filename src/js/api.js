import {useEffect, useState} from 'react'
 function Api(){


    const limit = 150; //numero de pokemons desejados
    useEffect(()=>{
        fetch(
          `https://pokeapi.co/api/v2/pokemon/?limit=${limit}`
        )
          .then((resposta) => {
              return resposta.json();
          })
          .then((dados) => {
            
            setAllpokemons(dados)
            console.log("allpo",allpokemons);
          });
      },[]);    
}

export {Api}