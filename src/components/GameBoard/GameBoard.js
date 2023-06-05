import { useEffect, useState } from 'react';
import { Player } from '../Player/Player';
import './GameBoard.css';

export const GameBoard = () => {
  const [players, setPlayers] = useState(null);
  const [playerID, setPlayerID] = useState('');

  useEffect(() => {
    setPlayerID(Date.now().toString())
    console.log(`gameboard mopunted for player ${playerID}`)
  }, []);

  return(
    <div className='game-board'>
      <Player x={100} y={100} isAttacker={true}/>
      <Player x={400} y={0} isAttacker={false}/>
    </div>
  )
}
