import styled from "styled-components";

export const StyledDisplay = styled.div<{ gameOver: boolean }>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin: 0 0 20px 0;
  padding: 20px;
  border: 4px solid #333;
  min-height: 30px;
  width: 100%;
  border-radius: 20px;
  background: "#000";
  color: ${props => (props.gameOver ? "red" : "#999")};
  font-size: 0.8rem;
`;
