import styled from 'styled-components';
import React from 'react';

const PlayerDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 120px;
  height: 120px;
  left: ${props => props.x}px;
  top: ${props => props.y}px;
  background-color: ${props => (props.isAttacker ? "#ee6c4d" : "#98c1d9")};
  border: ${props => (props.isUser ? "5px" : "0px")} solid ${props => (props.isUser ? "#66FF99" : "white")};
  border-radius: 80px;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`;

export const Player = ({x, y, isAttacker, isUser}) => {
  return (
    <PlayerDiv x={x} y={y} isAttacker={isAttacker} isUser={isUser}>
      <code className='player-label'>{isAttacker ? "evil <div>" : "nice <section>"}</code>
    </PlayerDiv>
  );
};
