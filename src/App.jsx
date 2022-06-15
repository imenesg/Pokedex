import { useState, useEffect } from "react";
import styled from "styled-components";
import GlobalStyle from "./components/GlobalStyle";
import "../css/font.css";

import Card from "./components/Card";

import Loading from "./components/Loading";

const AllCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1500px;
`;

function App() {
  const [allpokemons, setPokemons] = useState(null);

  function Api() {
    const limit = 150; //numero de pokemons desejados
    useEffect(() => {
      fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((resposta) => {
          return resposta.json();
        })
        .then((dados) => {
          setPokemons(dados.results);
        })
        .catch(() => console.log("erro :("));
    }, []);
  }
  Api();

  return (
    <>
      <GlobalStyle />
      <AllCards>
        {allpokemons ? ( //montra os pokemons apenas se o allpokemons diver algum dado
          <>
            {allpokemons.map((pokemon, i) => {
              return <Card key={i} pokemon={i + 1}></Card>;
            })}
          </>
        ) : (
          <Loading />
        )}
      </AllCards>
    </>
  );
}

export default App;
