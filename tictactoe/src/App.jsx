import Board from "./Board";
import { useState } from "react";

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [nextTurn, setNextTurn] = useState(true);

  const handleClick = (i) => {
    console.log('click');
    const updatedSquares = squares.slice();
    console.log('updatedSquares', updatedSquares);
    if(checkWinner(updatedSquares) || updatedSquares[i]) {
      return;
    }
    updatedSquares[i] = nextTurn ? 'X' : 'O';
    setSquares(updatedSquares);
    setNextTurn(!nextTurn);
  }

  const winner = checkWinner(squares);

  let gameStatus;
  if(winner) {
    gameStatus = `Winner: ${winner}`;
  } else {
    gameStatus = `Turn: ${nextTurn ? 'X' : 'O'}`;
  }

  return (
    <>
        <h1>Tic Tac Toe Game</h1>
        <Board squares={squares} onClick={(i) => handleClick(i)}/>
        {gameStatus}
    </>
  )
}

const checkWinner = (squares) => {
  const winningLines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];

  for(let i=0; i < winningLines.length; i++) {
    const[a,b,c] = winningLines[i];
    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default App;
