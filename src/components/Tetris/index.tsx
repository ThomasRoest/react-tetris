import React from "react";
import Stage from "../Stage";
import { StartButton } from "../Buttons";
import Display from "../Display";
import { createStage } from "../../helpers";

const Tetris = () => {
  return (
    <div>
      <Stage stage={createStage()} />
      <aside>
        <Display text="score" gameOver="" />
        <Display text="score" gameOver="" />
        <Display text="score" gameOver="" />

        <StartButton />
      </aside>
    </div>
  );
};

export default Tetris;
