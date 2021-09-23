import styled from "styled-components";
import React from "react";
import ChamadosContainer from "./ChamadosContainer";
import Header from "./Header";


const PageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 5px 10px black;
  background-color: #002346;
  color: whitesmoke;
  min-width: 1400px;

`;

export default function Chamada() {
  return (
    <PageContainer>
      <Header />
      <ChamadosContainer />
    </PageContainer>
  );
}
