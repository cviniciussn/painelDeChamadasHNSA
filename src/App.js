import React from "react";
import { createGlobalStyle } from "styled-components";
import Chamada from "./components/Chamada";

const GlobalStyle = createGlobalStyle`

*{
  padding: 0;
  margin: 0;
  font-family: 'Poppins', sans-serif;
}

body {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

`;

function App() {

  return (
    <React.Fragment>
      <GlobalStyle />
     <Chamada />
   </React.Fragment>
  );
}

export default App;
