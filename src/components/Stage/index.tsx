import React from "react";
import Cell from "../Cell";
import { StyledStage } from "./styles";

interface IProps {
  stage: any;
}

const Stage = ({ stage }: IProps) => {
  return (
    <StyledStage width={stage[0].length} height={stage.length}>
      {stage.map((row: any) =>
        row.map((cell: any, x: any) => <Cell key={x} type={cell[0]} />)
      )}
    </StyledStage>
  );
};

export default Stage;
