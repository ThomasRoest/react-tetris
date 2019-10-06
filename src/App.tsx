import React from "react";
import Tetris from "./components/Tetris";
import { randomTetromino } from "./helpers/tetrominos";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

const App: React.FC = () => {
  return (
    <div>
      <GlobalStyle />
      <Tetris />
    </div>
  );
};

export default App;
