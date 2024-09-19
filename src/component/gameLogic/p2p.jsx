import { useState } from "react";
import "./game.css";
import image1 from "../../assets/images/xone.png";
import image2 from "../../assets/images/oone.png";
import { useNavigate } from "react-router-dom";

function GameLogic() {
  const Navigate = useNavigate();

  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [count, setCount] = useState(0);

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(board);
  const isDraw = !winner && count === 9;

  const handleClick = (index) => {
    if (winner || board[index]) return;

    setCount(count + 1);
    const newBoard = board.slice();
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const renderSquare = (index) => {
    let content = null;
    if (board[index] === "X") {
      content = <img src={image1} alt="X" width={"80px"} height={"80px"} />;
    } else if (board[index] === "O") {
      content = <img src={image2} alt="O" width={"80px"} height={"80px"} />;
    }

    return (
      <button className="square" onClick={() => handleClick(index)}>
        {content}
      </button>
    );
  };

  const status = winner
    ? `Winner: ${winner}`
    : isDraw
    ? `Its a Draw!`
    : `Player: ${isXNext ? "X" : "O"}`;

  function handleClear() {
    setCount(0);
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  }

  return (
    <div className="game">
      <div className="game-board">
        <div className="status">{status}</div>
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      <div>
        <button className="morebtn" onClick={() => Navigate("/")}>
          Back
        </button>
        <button className="morebtn" onClick={handleClear}>
          One More?
        </button>
      </div>
    </div>
  );
}

export default GameLogic;
