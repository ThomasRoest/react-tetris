import React from "react";
import Tetris from "./components/Tetris";
import { randomTetromino } from "./helpers/tetrominos";

const App: React.FC = () => {
  return (
    <div>
      {/* <Tetris /> */}
      {JSON.stringify(randomTetromino())}
    </div>
  );
};

export default App;
