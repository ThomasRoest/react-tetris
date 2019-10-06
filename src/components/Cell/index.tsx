import React from "react";
import { StyledCell } from "./styles";
import { TETROMINOS } from "../../helpers/tetrominos";

interface IProps {
  type: any;
}

const Cell = ({ type }: IProps) => {
  return <StyledCell type={"L"} color={TETROMINOS["L"].color} />;
};

export default Cell;
