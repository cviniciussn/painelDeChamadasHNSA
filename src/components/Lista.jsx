import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import { paciente } from "../js/source";

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
`

const ListaChamados = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;

  th {
    height: 1.5em;
  }

  td {
    height: 2.6em;
  }

  tr {
    font-weight: 500;
    font-size: 20px;
  }
  tr:nth-child(even) {
    background-color: #a9a9a9b0;
  }
`;

const UltimoNome = styled.div`
  height: 10em;
  background-color: #0000ffd3;
  display: flex;
  flex-direction: row;
  color: yellow;
  justify-content: space-between;
  align-items: center;
  padding-left: 40px;
  padding-right: 90px;
  text-shadow: 2px 2px 2px black;
  border-radius: 10px;
  
  #paciente {
      font-size: x-large;
      animation-name: ${blink};
      animation-duration: 2s;
  }
`;

export default function Lista() {

  return (
    <>
      <UltimoNome>
        <div id="local">
          <h1> consultório: {paciente[0].local}</h1>
        </div>
        <div id="paciente">
          <h1> {paciente[0].nome} </h1>
        </div>
        <div id="horario">
          {" "}
          <h1> {paciente[0].horario} </h1>{" "}
        </div>
      </UltimoNome>

      <ListaChamados>
        <table>
          <thead>
            <tr>
              <th>
                <h3> Local </h3>
              </th>
              <th>
                {" "}
                <h3>Paciente</h3>{" "}
              </th>
              <th>
                {" "}
                <h3> Horário </h3>
              </th>
            </tr>
          </thead>

          <tbody>
            {paciente.map((value) => {
              return (
                <tr key={(Math.random()* 99) + 1}>
                  <td >{value.local || "Recepção"}</td>
                  <td> {value.nome} </td>
                  <td>{value.horario}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </ListaChamados>
    </>
  );
}
