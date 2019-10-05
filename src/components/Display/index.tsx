import React from "react";

interface IProps {
  gameOver: any;
  text: string;
}

const Display = ({ gameOver, text }: IProps) => {
  return <div>{text}</div>;
};

export default Display;
