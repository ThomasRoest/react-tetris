import React from "react";
import { StyledStartButton } from "./styles";

interface IProps {
  callback?: () => void;
}

export const StartButton = ({ callback }: IProps) => {
  return <StyledStartButton onClick={callback}>Start game</StyledStartButton>;
};
