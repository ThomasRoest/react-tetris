import React from "react";
import Stage from "../Stage";
import { StartButton } from "../Buttons";
import Display from "../Display";
import { createStage } from "../../helpers";
import { StyledTetrisWrapper, StyledTetris } from "./styles";

const Tetris = () => {
  return (
    <StyledTetrisWrapper>
      <StyledTetris>
        <Stage stage={createStage()} />
        <aside>
          <Display text="score" gameOver="" />
          <Display text="score" gameOver="" />
          <Display text="score" gameOver="" />

          <StartButton />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
