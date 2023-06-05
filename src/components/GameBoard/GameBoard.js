import { useEffect, useState } from 'react';
import { Player } from '../Player/Player';
import './GameBoard.css';
import { addPlayer, getPlayers, movePlayer, removePlayer } from '../../api';

export const GameBoard = () => {
  const [players, setPlayers] = useState(null);
  const [playerID, setPlayerID] = useState('');

  useEffect(() => {
    setPlayerID(Date.now().toString())

    console.log(`gameboard initilized`)
  }, []);

  useEffect(() => {
    const update = async () => {
      await addPlayer(playerID);
      const data = await getPlayers();
      setPlayers(data);
    }

    if(playerID) {
      console.log(`gameboard mounted for player ${playerID}`);
      setupPageUnload();
      update();
    }
  }, [playerID]);

  const getAllPlayers = () => {
      const keys = Object.keys(players)
      return keys.map(key => {
        const player = players[key];
        return <Player x={player.x} y={player.y} isAttacker={player.isAttacker} isUser={key === playerID} key={key}/>
    });
  }

  const runMovePlayer = async (playerID, newX, newY) => {
    await movePlayer(playerID, newX, newY);
    const data = await getPlayers();
    setPlayers(data);
  }

  const controller = (e) => {
    const player = players[playerID];
    let newX = player.x;
    let newY = player.y;
    switch(e.key) {
      case 'ArrowUp':
        newY -= 10;
        runMovePlayer(playerID, newX, newY);
        break;
      case 'ArrowDown':
        newY += 10;
        runMovePlayer(playerID, newX, newY);
        break;
      case 'ArrowLeft':
        newX -= 10;
        runMovePlayer(playerID, newX, newY);
        break;
      case 'ArrowRight':
        newX += 10;
        runMovePlayer(playerID, newX, newY);
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    const interval = setInterval( async () => {
      console.log('board uopdate');
      const data = await getPlayers();
      setPlayers(data);
    }, 100);
  
    return () => clearInterval(interval);
  }, []);

  const setupPageUnload = () => {
    window.addEventListener("beforeunload", (e) => {
      e.preventDefault();
        console.log('remove:', playerID)
        removePlayer(playerID);
    })
  }

  return(
    <div className='game-board' autofocus tabIndex={0} onKeyDown={e => controller(e)}>
      {players && getAllPlayers()}
    </div>
  )
}
