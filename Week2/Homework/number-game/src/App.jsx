import { useState } from "react";
import Header from "./components/Header/Header";
import GameBoard from "./components/GameBoard/GameBoard";
import Ranking from "./components/Ranking/Ranking";
import useGame from "./hooks/useGame";

function App() {
  const [page, setPage] = useState("game");
  const {
    cells,
    next,
    total,
    elapsed,
    level,
    changeLevel,
    size,
    handleCellClick,
    wrongIndex,
    clearWrong,
  } = useGame();

  return (
    <>
      <Header
        page={page}
        onPageChange={setPage}
        level={level}
        onLevelChange={changeLevel}
        elapsed={elapsed}
      />
      {page === "game" && (
        <GameBoard
          cells={cells}
          next={next}
          total={total}
          size={size}
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
