export const getPlayers = async () => {
  const options = {
    method: 'GET'
  };
  
  try {
    const response = await fetch(`http://localhost:3001/api/v1/gameboard`, options);
    if(!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    return data;
  }catch(error) {
    console.log(error)
  }
}

export const addPlayer = async (playerID) => {
  const options = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify( {
      player: playerID
    }),
  };
  
  try {
    const response = await fetch(`http://localhost:3001/api/v1/new`, options);
    if(!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    return data;
  }catch(error) {
    console.log(error)
  }
}

export const movePlayer = async (playerID, x, y) => {
  const options = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify( {
      player: playerID,
      x: x,
      y: y
    }),
  };
  
  try {
    const response = await fetch(`http://localhost:3001/api/v1/move`, options);
    if(!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    return data;
  }catch(error) {
    console.log(error)
  }
}

export const removePlayer = async (playerID) => {
  const options = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify( {
      player: playerID
    }),
  };
  
  try {
    const response = await fetch(`http://localhost:3001/api/v1/delete`, options);
    if(!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    return data;
  }catch(error) {
    console.log(error)
  }
}
