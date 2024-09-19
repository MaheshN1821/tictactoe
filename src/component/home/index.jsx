import { useNavigate } from "react-router-dom";
import "./home.css";

function Home() {
  const Navigate = useNavigate();

  return (
    <div className="mainLayout">
      <ul className="background">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <h1>TicTacToe</h1>
      <div className="layout">
        <div className="container" onClick={() => Navigate("/p2p")}>
          Player V/S Player
        </div>
        <div className="container" onClick={() => Navigate("/p2c")}>
          Player V/S Computer
        </div>
      </div>
    </div>
  );
}

export default Home;
