import React from "react";
import styled from "styled-components";
import img from "../img/heraldica.png";
import Relogio from "./Relogio";


const Cabecalho = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 200px;
  width: 100%;
  color: whitesmoke;
  justify-content: space-evenly;
  align-items: center;
  margin-left: 100px;
  margin-right: 100px;


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
      <div>
        <h1>Hospital Naval de Salvador</h1>
        <h2>Marinha do Brasil 🇧🇷</h2> 
      </div>
      <Relogio></Relogio>
    </Cabecalho>
  );
}
