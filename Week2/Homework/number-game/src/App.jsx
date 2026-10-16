import { useState } from "react";
import Header from "./components/Header/Header";
import GameBoard from "./components/GameBoard/GameBoard";
import Ranking from "./components/Ranking/Ranking";
import useGame from "./hooks/useGame";

function App() {
  const [page, setPage] = useState("game");
  const [level, setLevel] = useState(1);
  const {
    cells,
    next,
    total,
    elapsed,
    handleCellClick,
    wrongIndex,
    clearWrong,
  } = useGame(level);

  return (
    <>
      <Header
        page={page}
        onPageChange={setPage}
        level={level}
        onLevelChange={setLevel}
        elapsed={elapsed}
      />
      {page === "game" && (
        <GameBoard
          cells={cells}
          next={next}
          total={total}
          wrongIndex={wrongIndex}
          onWrongEnd={clearWrong}
          onCellClick={handleCellClick}
        />
      )}

      {page === "ranking" && <Ranking />}
    </>
  );
}

export default App;
