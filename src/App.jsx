import { useState, useEffect } from "react";
import styled from "styled-components";
import GlobalStyle from "./components/GlobalStyle";
import "../css/font.css";

import Card from "./components/Card";
import CardWrap from "./components/CardWrap";
import Loading from "./components/Loading";

const AllCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1500px;
  margin: 0 auto;
`;
const InputButton = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1500px;
  margin-top: 1rem;
  margin: 1rem  auto 0 auto;

  input {
    padding: 0.5rem;
    border-radius: 0.25rem;
    margin-right: 1rem;
    border: none;
    
  }
  button {
    background-color: #e9283c;
    font-size: 1.5rem;
    color: #f7f7f7;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.25rem;
    border-radius: 25%;
    cursor: pointer;
  }
`;

function App() {
  const [allpokemons, setPokemons] = useState(null);
  const [searchedPokemon, setSearchedPokemon] = useState("");
  const [showSearchedPokemon, setShowSearchedPokemon] = useState(null);

  /*function Api() {*/
  const limit = 151; //numero de pokemons desejados
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
  /* }
  Api();*/

  function funOnchange(inputPokemon) {
    setSearchedPokemon(inputPokemon.target.value);
  }

  return (
    <>
      <GlobalStyle />
      {allpokemons ? (
        <>
          <InputButton>
            <input
              type="text"
              value={searchedPokemon}
              onChange={funOnchange}
              placeholder="Pokemon"
            />{" "}
            <button onClick={() => searchedPokemon ? setShowSearchedPokemon(true) : null}>
              <i className="bx bx-search-alt"></i>
            </button>
          </InputButton>
        </>
      ) : null}

      {showSearchedPokemon ? (
        <CardWrap
          setSearchedPokemon={setSearchedPokemon}
          setShowSearchedPokemon={setShowSearchedPokemon}
        >
          {" "}
          <Card key={"searchedPokemon"} pokemon={searchedPokemon}></Card>{" "}
        </CardWrap>
      ) : null}
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
