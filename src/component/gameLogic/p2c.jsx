import { useEffect, useState } from "react";
import "./game.css";
import image1 from "../../assets/images/xtwo.png";
import image2 from "../../assets/images/otwo.png";
import { useNavigate } from "react-router-dom";

function GameLogicTwo() {
  const Navigate = useNavigate();

  const [board, setBoard] = useState(Array(9).fill(null));
  const [count, setCount] = useState(1);
  const [selected, setSelected] = useState([]);

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
  const isDraw = !winner && count === 10;

  function toCal() {
    let num;
    do {
      num = Math.floor(Math.random() * 9);
    } while (selected.includes(num) || board[num]);
    return num;
  }

  const handleClick = (index) => {
    if (winner || board[index]) return;
    setSelected([...selected, index]);

    const newBoard = board.slice();
    newBoard[index] = "X";
    setBoard(newBoard);
    setCount(count + 1);
  };

  useEffect(() => {
    if (winner || isDraw) return;
    if (count % 2 === 0) {
      const computedIndex = toCal();
      const newBoard = board.slice();
      newBoard[computedIndex] = "O";
      setSelected([...selected, computedIndex]);
      setBoard(newBoard);
      setCount(count + 1);
    }
  }, [count]);

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

  const toPrint = winner === "X" ? "Player Won!" : "Computer Won!";
  const status = winner
    ? `${toPrint}`
    : isDraw
    ? "It's a Draw!"
    : `${count % 2 === 0 ? "Computer's Turn" : "Player's Turn"}`;

  function handleClear() {
    setCount(1);
    setSelected([]);
    setBoard(Array(9).fill(null));
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

export default GameLogicTwo;
