import React from "react";
import styled from "styled-components";
import Lista from "./Lista";

const Container = styled.div`
  height: fit-content;
  width: 80vw;
  background-color: aliceblue;
  box-shadow: 5px 5px 10px black;
  margin-bottom: 20px;
  border-radius: 10px;
  min-width: 1000px;

  table{
    margin-top: 25px;
    color: black;
  }
  tr {
    text-align: center;
  }
`;

export default function ChamadosContainer() {
  return (
    <>
    <Container>
      <Lista></Lista>
    </Container>
    <p>Desenvolvido pelo Hospital Naval de Salvador. Todos os direitos reservados - 2021</p>
    </>
  );
}
