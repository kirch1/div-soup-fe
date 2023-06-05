import styled from 'styled-components';
import React from 'react';

const PlayerDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100px;
  height: 100px;
  left: ${props => props.x}px;
  top: ${props => props.y}px;
  background-color: ${props => (props.isAttacker ? "#ee6c4d" : "#98c1d9")};
  border: 4px solid white;
  border-radius: 60px;
`;



export const Player = ({x, y, isAttacker}) => {

  return <PlayerDiv x={x} y={y} isAttacker={isAttacker}>{isAttacker ? "evil <div>" : ""}</PlayerDiv>;
};
