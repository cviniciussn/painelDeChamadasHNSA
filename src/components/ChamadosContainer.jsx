import React from "react";
import styled from "styled-components";
import Lista2 from "./Lista2";

const Container = styled.div`
  height: 100%;
  width: 90vw;
  background-color: aliceblue;
  margin-bottom: 20px;
  border-radius: 10px;

  table {
    margin-top: 25px;
    color: black;
  }
  tr {
    text-align: center;
  }
`;

export default function ChamadosContainer() {
  return (
    <React.Fragment>
      <Container>
        <Lista2></Lista2>
      </Container>
      <p>
        Desenvolvido pelo Hospital Naval de Salvador. Todos os direitos
        reservados - 2021
        {/* Ex Mn Carlos Vinicius - frontEndDeveloper - (71)99125-2375 */}
      </p>
    </React.Fragment>
  );
}
