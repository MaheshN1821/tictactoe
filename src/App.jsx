import Home from "./component/home";
import { Route, Routes } from "react-router-dom";
import GameLogic from "./component/gameLogic/p2p";
import GameLogicTwo from "./component/gameLogic/p2c";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/p2p" element={<GameLogic />} />
        <Route path="/p2c" element={<GameLogicTwo />} />
      </Routes>
    </div>
  );
}

export default App;
