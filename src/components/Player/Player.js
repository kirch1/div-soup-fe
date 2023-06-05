import styled from 'styled-components';

export const Player = ({x, y, isAttacker}) => {
  const PlayerDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100px;
    height: 100px;
    left: ${x}px;
    top: ${y}px;
    background-color: ${isAttacker ? '#ee6c4d' : '#98c1d9'};
    border: 4px solid white;
    border-radius: 60px;
  `;

  return <PlayerDiv>{`evil <div>`}</PlayerDiv>;
};
