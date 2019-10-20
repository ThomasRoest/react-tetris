import React from "react";
import { StyledDisplay } from "./styles";

interface IProps {
  gameOver: any;
  text: string;
}

const Display = ({ gameOver, text }: IProps) => {
  return <StyledDisplay gameOver={gameOver}>{text}</StyledDisplay>;
};

export default Display;
