import React from "react";
import Cell from "../Cell";

interface IProps {
  stage: any;
}

const Stage = ({ stage = [] }: IProps) => {
  return (
    <div>
      {stage.map((row: any) =>
        row.map((cell: any, x: any) => <Cell key={x} type={cell[0]} />)
      )}
    </div>
  );
};

export default Stage;
