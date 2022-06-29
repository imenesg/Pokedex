import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  position: fixed;

  height: 100vh;
  width: 100%;

  top: 0;
  left: 0;
  bottom: 0;

  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;

  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    -webkit-backdrop-filter: blur(10px);
    background-color: rgba(209, 209, 209, 0.5);
    backdrop-filter: blur(10px);
  }

  /* slightly transparent fallback for Firefox (not supporting backdrop-filter) */
  @supports not ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
    background-color: rgba(209, 209, 209, 0.9);
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

function CardWrap(props) {
  function hideCardWrap() {
    props.setSearchedPokemon("");
    props.setShowSearchedPokemon(null);
  }
  return (
    <Wrap>
      <button onClick={() => hideCardWrap()}>
        <i className="bx bx-x"></i>
      </button>
      {props.children}
    </Wrap>
  );
}

export default CardWrap;
