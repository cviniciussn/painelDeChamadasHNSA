import React from "react";
import styled from "styled-components";
import img from "../img/heraldica.png";
import Relogio from "./Relogio";


const Cabecalho = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 180px;
  width: 100%;
  color: whitesmoke;
  justify-content: space-evenly;
  align-items: center;
  margin-left: 90px;
  margin-right: 90px;

  img {
    height: 150px;
    width: 120px;
  }

  div {
      text-align: center;
    h1 {
      font-size: xxx-large;
    }
  }

`;

export default function Header() {
  return (
    <Cabecalho>
      <img src={img} alt="logomarca" />
      <div id='texto'>
        <h1>Hospital Naval de Salvador</h1>
        <h2>Marinha do Brasil {/* <span> 🇧🇷 </span>  */} </h2>
      </div>
      
      <Relogio ></Relogio>
    </Cabecalho>
  );
}
