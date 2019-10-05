import React from "react";

interface IProps {
  callback?: () => void;
}

export const StartButton = ({ callback }: IProps) => {
  return <div>Start game</div>;
};
