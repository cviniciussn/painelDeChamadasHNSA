import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import handleData from "../js/source";
import Sound from "../audio/Alert";
import Loader from "./Loader";

const blink = keyframes`
{
  0%,
  50%,
  100% {
    opacity: 1;
  }
  25%,
  75% {
    opacity: 0;
  }
}

`;

const ListaChamados = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;

  table{
    width: 100%;
  }

  th {
    height: 1.5em;
  }

  td {
    height: 1.8em;

  }

  #coluna-local{
    width: 200px;
  }
  
 
  tr {
    font-weight: 500;
    font-size: 20px;
  }
  tr:nth-child(even) {
    background-color: #a9a9a9b0;
  }
/*   #coluna-horario{
    width: 60px !important;
  } */

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

  svg {
    width: 100px;
    height: 100px;
    margin: 20px;
    display: inline-block;
  }

  #paciente {
   > h1{
      padding-right: 70px;
    }
    font-size: x-large;
    animation-name: ${blink};
    animation-duration: 2s;
    animation-iteration-count: 2;
  }
  
  #local{
    text-align: center;
    padding-left: 5px;
  }
  #horario{
    padding-left: 60px;
  }
`;

export default class Lista2 extends React.Component {
  constructor(props) {
    super();
    this.state = {
      loading: "initial",
      paciente: [],
    };
  }

  getData() {
    const response = fetch("http://10.12.114.202:5000/").then((res) =>
      res.json()
    );
    return response;
  }

  componentDidMount() {
    this.setState({ loading: "true" });

    setInterval(() => {
      this.getData().then((res) => {
        const dados = handleData(res);
        this.setState({
          loading: false,
          paciente: dados,
        });
      });
    }, 5000);
  }

  render() {
    if (this.state.loading === "initial") {
      return (
        <UltimoNome>
          <h1>Iniciando...</h1>
        </UltimoNome>
      );
    } else if (this.state.loading === "true") {
      return (
        <UltimoNome>
          {" "}
          <h3>Carregando...</h3> <Loader />{" "}
        </UltimoNome>
      );
    } else {
      return (
        <React.Fragment>
          <UltimoNome key={this.state.paciente[0].id}>
            <Sound key={this.state.paciente[0].id}/>
            <div id="local">
              <h1>{this.state.paciente[0].local}</h1>
            </div>
            <div id="paciente">
              <h1> {this.state.paciente[0].nome} </h1>
            </div>
            <div id="horario">
              <h1> {this.state.paciente[0].horario} </h1>
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
                    <h3>Paciente / Senha </h3>{" "}
                  </th>
                  <th>
                    {" "}
                    <h3> Horário </h3>
                  </th>
                </tr>
              </thead>

              <tbody>
                {this.state.paciente.map((value) => {
                  return (
                    <tr key={Math.random() * 99 + 1}>
                      <td id="coluna-local">{value.local}</td>
                      <td> {value.nomeCompleto} </td>
                      <td id="coluna-horario">{value.horario}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </ListaChamados>
        </React.Fragment>
      );
    }
  }
}
