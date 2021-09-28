import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import handleData from "../js/source";
import notification from '../audio/notify.mp3'
import Sound from '../audio/Alert'

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

const ListaChamados = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;

  th {
    height: 1.5em;
  }

  td {
    height: 1.8em;
    width: min-content;
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

export default class Lista2 extends React.Component {
  constructor(props) {
    super();
    console.log("começo");
    this.audio = new Audio(notification)
    this.state = {
      loading: "initial",
      paciente: [],
    };

  }

  getData() {
    const response = fetch("http://10.12.127.19:5000/").then((res) =>
      res.json()
    );
    return response;
  }

  componentDidMount() {
    this.setState({ loading: "true" });

    setInterval(() => {
      this.getData().then((res) => {
        console.log("atualizei");
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
      return <UltimoNome><h1>Iniciando...</h1></UltimoNome>;
    } else if (this.state.loading === "true") {
      return <UltimoNome><h1>Carregando...</h1></UltimoNome>;
    } else {
      return (
        <React.Fragment>
          <UltimoNome key={this.state.paciente}>
              <Sound/>
            <div id="local">
              <h1> cons: {this.state.paciente[0].local}</h1>
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
                    <h3> Cons. </h3>
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
                {this.state.paciente.map((value) => {
                  return (
                    <tr key={Math.random() * 99 + 1}>
                      <td>{value.local}</td>
                      <td> {value.nomeCompleto} </td>
                      <td>{value.horario}</td>
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
