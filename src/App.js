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
}

`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Chamada />
    </>
  );
}

export default App;
