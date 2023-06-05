import { useEffect, useState } from 'react';
import { Player } from '../Player/Player';
import './GameBoard.css';

export const GameBoard = () => {
  const [players, setPlayers] = useState(null);
  const [playerID, setPlayerID] = useState('');

  useEffect(() => {
    console.log('gameboard mounted')
    setPlayerID(Date.now().toString())
  }, []);

  return(
    <div className='game-board'>
      <Player x={100} y={100} isAttacker={true}/>
      <Player x={400} y={0} isAttacker={false}/>
    </div>
  )
}
