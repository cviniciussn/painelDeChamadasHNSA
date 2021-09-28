import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

const blink = keyframes`
  0% {
    -webkit-transform: scale(2);
            transform: scale(2);
    -webkit-filter: blur(4px);
            filter: blur(4px);
    opacity: 0;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
}
`;

const UltimoNome = styled.div`
  height: 7em;
  background-color: #0000ffd3;
  display: flex;
  flex-direction: row;
  color: yellow;
  justify-content: space-between;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
  text-shadow: 2px 2px 2px black;
  border-radius: 10px;

  #paciente {
    font-size: x-large;
    animation-name: ${blink};
    animation-duration: 2s;
  }
`;

export default function UltimoChamado(props) {


    const paciente = props.data
    console.log(props)
  return (
    <UltimoNome>
      <div>
        <div id="local">
          <h1> cons: {paciente[0].local}</h1>
        </div>
        <div id="paciente">
          <h1> {paciente[0].nome} </h1>
        </div>
        <div id="horario">
          <h1> {paciente[0].horario} </h1>
        </div>
      </div>
    </UltimoNome>
  );
}
